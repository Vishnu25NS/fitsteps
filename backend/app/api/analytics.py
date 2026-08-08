from datetime import date, datetime, timedelta
from fastapi import APIRouter, Depends
from sqlalchemy import select
from sqlalchemy.orm import Session

from app.db import get_db
from app.models.activity import Activity
from app.models.goal import Goal

router = APIRouter()


@router.get("/summary")
def get_analytics_summary(db: Session = Depends(get_db)):
    today = date.today()
    last_7_dates = [today - timedelta(days=i) for i in range(6, -1, -1)]
    date_strs = [d.strftime("%Y-%m-%d") for d in last_7_dates]

    # Fetch activities and goals
    activities = list(db.execute(select(Activity)).scalars().all())
    goals = list(db.execute(select(Goal)).scalars().all())

    if not activities and not goals:
        return {
            "weeklyStepAverage": 0,
            "bestDay": "N/A",
            "goalCompletionRate": 0,
            "streak": 0,
            "activityBreakdown": {
                "walking": 0,
                "running": 0,
                "cycling": 0,
                "workout": 0,
            },
        }

    # 1. Weekly Step Average
    total_steps_7d = 0
    activity_dates = set()
    daily_calories: dict[str, int] = {}
    daily_duration: dict[str, int] = {}
    activity_breakdown = {
        "walking": 0,
        "running": 0,
        "cycling": 0,
        "workout": 0,
    }

    for act in activities:
        if not act.date_time:
            continue

        act_date_str = act.date_time.date().strftime("%Y-%m-%d")
        activity_dates.add(act_date_str)

        # Step calculation
        if act.distance is not None and act.distance > 0:
            steps = int(act.distance * 1300)
        else:
            steps = int((act.duration or 0) * 100)

        if act_date_str in date_strs:
            total_steps_7d += steps

        # Calories & Duration for best day
        cal = act.calories or 0
        dur = act.duration or 0
        daily_calories[act_date_str] = daily_calories.get(act_date_str, 0) + cal
        daily_duration[act_date_str] = daily_duration.get(act_date_str, 0) + dur

        # Category breakdown
        cat = (act.category or "workout").strip().lower()
        if cat in activity_breakdown:
            activity_breakdown[cat] += 1
        elif cat == "walk":
            activity_breakdown["walking"] += 1
        elif cat == "run":
            activity_breakdown["running"] += 1
        elif cat == "cycle":
            activity_breakdown["cycling"] += 1
        else:
            activity_breakdown["workout"] += 1

    weekly_step_average = int(total_steps_7d / 7)

    # 2. Best Day
    if daily_calories and any(daily_calories.values()):
        best_day = max(daily_calories, key=lambda d: daily_calories[d])
    elif daily_duration and any(daily_duration.values()):
        best_day = max(daily_duration, key=lambda d: daily_duration[d])
    else:
        best_day = "N/A"

    # 3. Goal Completion Rate
    if goals:
        completed = sum(1 for g in goals if (g.current_value or 0) >= (g.target_value or 1))
        goal_completion_rate = int(round((completed / len(goals)) * 100))
    else:
        goal_completion_rate = 0

    # 4. Streak
    streak = 0
    current_check = today
    while current_check.strftime("%Y-%m-%d") in activity_dates:
        streak += 1
        current_check -= timedelta(days=1)

    return {
        "weeklyStepAverage": weekly_step_average,
        "bestDay": best_day,
        "goalCompletionRate": goal_completion_rate,
        "streak": streak,
        "activityBreakdown": activity_breakdown,
    }

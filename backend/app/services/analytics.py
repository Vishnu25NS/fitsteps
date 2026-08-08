from datetime import date, datetime, timedelta
from sqlalchemy import select
from sqlalchemy.orm import Session

from app.models.activity import Activity
from app.models.goal import Goal


def get_weekly_analytics(db: Session) -> dict:
    today = date.today()
    last_7_dates = [today - timedelta(days=i) for i in range(6, -1, -1)]
    date_strs = [d.strftime("%Y-%m-%d") for d in last_7_dates]

    # Fetch active goal target or fallback to 10000
    goal_stmt = select(Goal).order_by(Goal.created_at.desc())
    latest_goal = db.execute(goal_stmt).scalars().first()
    target_value = latest_goal.target_value if latest_goal and latest_goal.target_value > 0 else 10000.0

    # Fetch activities
    act_stmt = select(Activity)
    activities = list(db.execute(act_stmt).scalars().all())

    # Map steps per date string
    steps_per_date: dict[str, int] = {d: 0 for d in date_strs}

    for act in activities:
        if not act.date_time:
            continue
        act_date_str = act.date_time.date().strftime("%Y-%m-%d")
        if act_date_str in steps_per_date:
            if act.distance is not None and act.distance > 0:
                calc_steps = int(act.distance * 1300)
            else:
                calc_steps = int((act.duration or 0) * 100)
            steps_per_date[act_date_str] += calc_steps

    daily_breakdown = [
        {"date": d, "steps": steps_per_date[d]} for d in date_strs
    ]

    total_weekly_steps = sum(steps_per_date.values())
    weekly_avg = int(total_weekly_steps / 7)

    # Best day calculation
    if any(steps_per_date.values()):
        best_date_str = max(steps_per_date, key=lambda k: steps_per_date[k])
        best_dt = datetime.strptime(best_date_str, "%Y-%m-%d")
        best_day = best_dt.strftime("%A")
    else:
        best_day = "None"

    # Goal completion rate
    completed_days = sum(1 for d in date_strs if steps_per_date[d] >= target_value)
    completion_rate = round(completed_days / 7.0, 2)

    # Streak calculation
    sorted_dates_desc = sorted(date_strs, reverse=True)
    current_streak = 0
    for d in sorted_dates_desc:
        if steps_per_date[d] >= target_value:
            current_streak += 1
        else:
            break

    return {
        "weeklyAverageSteps": weekly_avg,
        "bestDay": best_day,
        "goalCompletionRate": completion_rate,
        "currentStreak": current_streak,
        "dailyBreakdown": daily_breakdown,
    }

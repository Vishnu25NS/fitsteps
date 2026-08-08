from sqlalchemy import select
from sqlalchemy.orm import Session

from app.models.goal import Goal
from app.schemas.goal import GoalCreate, GoalUpdate


def create_goal(db: Session, goal: GoalCreate) -> Goal:
    db_goal = Goal(**goal.model_dump(by_alias=False))

    db.add(db_goal)
    db.commit()
    db.refresh(db_goal)

    return db_goal


def get_goals(db: Session) -> list[Goal]:
    stmt = select(Goal).order_by(Goal.created_at.desc())
    return list(db.execute(stmt).scalars().all())


def get_goal_by_id(db: Session, goal_id: int) -> Goal | None:
    stmt = select(Goal).where(Goal.id == goal_id)
    return db.execute(stmt).scalars().first()


def update_goal(
    db: Session,
    db_goal: Goal,
    goal: GoalUpdate,
) -> Goal:
    update_data = goal.model_dump(exclude_unset=True, by_alias=False)

    for key, value in update_data.items():
        setattr(db_goal, key, value)

    db.commit()
    db.refresh(db_goal)

    return db_goal


def delete_goal(db: Session, db_goal: Goal) -> None:
    db.delete(db_goal)
    db.commit()

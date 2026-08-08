from fastapi import HTTPException, status
from sqlalchemy.orm import Session

from app.crud.goal import (
    create_goal,
    delete_goal,
    get_goal_by_id,
    get_goals,
    update_goal,
)
from app.schemas.goal import GoalCreate, GoalUpdate


def create_new_goal(
    db: Session,
    goal: GoalCreate,
):
    return create_goal(db, goal)


def get_all_goals(db: Session):
    return get_goals(db)


def get_goal(db: Session, goal_id: int):
    goal = get_goal_by_id(db, goal_id)

    if goal is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Goal not found",
        )

    return goal


def update_existing_goal(
    db: Session,
    goal_id: int,
    goal_data: GoalUpdate,
):
    goal = get_goal_by_id(db, goal_id)

    if goal is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Goal not found",
        )

    return update_goal(db, goal, goal_data)


def delete_existing_goal(
    db: Session,
    goal_id: int,
):
    goal = get_goal_by_id(db, goal_id)

    if goal is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Goal not found",
        )

    delete_goal(db, goal)

    return {
        "message": "Goal deleted successfully"
    }

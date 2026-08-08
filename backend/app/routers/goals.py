from fastapi import APIRouter, Depends, status
from sqlalchemy.orm import Session

from app.db import get_db
from app.schemas.goal import (
    GoalCreate,
    GoalResponse,
    GoalUpdate,
)
from app.services.goal_service import (
    create_new_goal,
    delete_existing_goal,
    get_all_goals,
    get_goal,
    update_existing_goal,
)

router = APIRouter()


@router.post(
    "/",
    response_model=GoalResponse,
    status_code=status.HTTP_201_CREATED,
)
def create_goal(
    goal: GoalCreate,
    db: Session = Depends(get_db),
):
    return create_new_goal(db, goal)


@router.get(
    "/",
    response_model=list[GoalResponse],
)
def read_goals(
    db: Session = Depends(get_db),
):
    return get_all_goals(db)


@router.get(
    "/{goal_id}",
    response_model=GoalResponse,
)
def read_goal(
    goal_id: int,
    db: Session = Depends(get_db),
):
    return get_goal(db, goal_id)


@router.put(
    "/{goal_id}",
    response_model=GoalResponse,
)
def update_goal(
    goal_id: int,
    goal: GoalUpdate,
    db: Session = Depends(get_db),
):
    return update_existing_goal(
        db,
        goal_id,
        goal,
    )


@router.delete(
    "/{goal_id}",
)
def delete_goal(
    goal_id: int,
    db: Session = Depends(get_db),
):
    return delete_existing_goal(
        db,
        goal_id,
    )

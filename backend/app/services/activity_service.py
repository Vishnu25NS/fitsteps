
from fastapi import HTTPException, status
from sqlalchemy.orm import Session

from app.crud.activity import (
    create_activity,
    delete_activity,
    get_activities,
    get_activity_by_id,
    update_activity,
)
from app.schemas.activity import ActivityCreate, ActivityUpdate


def create_new_activity(
    db: Session,
    activity: ActivityCreate,
):
    return create_activity(db, activity)


def get_all_activities(db: Session):
    return get_activities(db)


def get_activity(db: Session, activity_id: int):
    activity = get_activity_by_id(db, activity_id)

    if activity is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Activity not found",
        )

    return activity


def update_existing_activity(
    db: Session,
    activity_id: int,
    activity_data: ActivityUpdate,
):
    activity = get_activity_by_id(db, activity_id)

    if activity is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Activity not found",
        )

    return update_activity(db, activity, activity_data)


def delete_existing_activity(
    db: Session,
    activity_id: int,
):
    activity = get_activity_by_id(db, activity_id)

    if activity is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Activity not found",
        )

    delete_activity(db, activity)

    return {
        "message": "Activity deleted successfully"
    }
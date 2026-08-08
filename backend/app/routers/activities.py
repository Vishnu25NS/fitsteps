from fastapi import APIRouter, Depends, status
from sqlalchemy.orm import Session

from app.db import get_db
from app.schemas.activity import (
    ActivityCreate,
    ActivityResponse,
    ActivityUpdate,
)
from app.services.activity_service import (
    create_new_activity,
    delete_existing_activity,
    get_activity,
    get_all_activities,
    update_existing_activity,
)

router = APIRouter()


@router.post(
    "/",
    response_model=ActivityResponse,
    status_code=status.HTTP_201_CREATED,
)
def create_activity(
    activity: ActivityCreate,
    db: Session = Depends(get_db),
):
    return create_new_activity(db, activity)


@router.get(
    "/",
    response_model=list[ActivityResponse],
)
def read_activities(
    db: Session = Depends(get_db),
):
    return get_all_activities(db)


@router.get(
    "/{activity_id}",
    response_model=ActivityResponse,
)
def read_activity(
    activity_id: int,
    db: Session = Depends(get_db),
):
    return get_activity(db, activity_id)


@router.put(
    "/{activity_id}",
    response_model=ActivityResponse,
)
def update_activity(
    activity_id: int,
    activity: ActivityUpdate,
    db: Session = Depends(get_db),
):
    return update_existing_activity(
        db,
        activity_id,
        activity,
    )


@router.delete(
    "/{activity_id}",
)
def delete_activity(
    activity_id: int,
    db: Session = Depends(get_db),
):
    return delete_existing_activity(
        db,
        activity_id,
    )
from sqlalchemy import select
from sqlalchemy.orm import Session

from app.models.activity import Activity
from app.schemas.activity import ActivityCreate, ActivityUpdate


def create_activity(db: Session, activity: ActivityCreate) -> Activity:
    db_activity = Activity(**activity.model_dump())

    db.add(db_activity)
    db.commit()
    db.refresh(db_activity)

    return db_activity


def get_activities(db: Session) -> list[Activity]:
    stmt = select(Activity).order_by(Activity.date_time.desc())
    return list(db.execute(stmt).scalars().all())


def get_activity_by_id(db: Session, activity_id: int) -> Activity | None:
    stmt = select(Activity).where(Activity.id == activity_id)
    return db.execute(stmt).scalars().first()


def update_activity(
    db: Session,
    db_activity: Activity,
    activity: ActivityUpdate,
) -> Activity:
    update_data = activity.model_dump(exclude_unset=True)

    for key, value in update_data.items():
        setattr(db_activity, key, value)

    db.commit()
    db.refresh(db_activity)

    return db_activity


def delete_activity(db: Session, db_activity: Activity) -> None:
    db.delete(db_activity)
    db.commit()

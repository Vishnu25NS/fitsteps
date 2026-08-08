from datetime import datetime
from pydantic import BaseModel, ConfigDict, Field


class ActivityBase(BaseModel):
    title: str = Field(default="Workout", min_length=1, max_length=100)
    category: str = Field(default="Walking", min_length=2, max_length=50, alias="activity_type")
    duration: int = Field(..., gt=0, alias="duration_minutes")
    distance: float | None = Field(default=None, ge=0, alias="distance_km")
    calories: int | None = Field(default=None, ge=0)
    notes: str | None = Field(default=None, max_length=500)
    dateTime: datetime = Field(..., alias="date_time")

    model_config = ConfigDict(
        from_attributes=True,
        populate_by_name=True,
    )


class ActivityCreate(ActivityBase):
    pass


class ActivityUpdate(BaseModel):
    title: str | None = Field(default=None, min_length=1, max_length=100)
    category: str | None = Field(default=None, min_length=2, max_length=50, alias="activity_type")
    duration: int | None = Field(default=None, gt=0, alias="duration_minutes")
    distance: float | None = Field(default=None, ge=0, alias="distance_km")
    calories: int | None = Field(default=None, ge=0)
    notes: str | None = Field(default=None, max_length=500)
    dateTime: datetime | None = Field(default=None, alias="date_time")

    model_config = ConfigDict(
        from_attributes=True,
        populate_by_name=True,
    )


class ActivityResponse(ActivityBase):
    id: int
    created_at: datetime

    model_config = ConfigDict(
        from_attributes=True,
        populate_by_name=True,
    )
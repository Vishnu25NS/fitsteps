from datetime import datetime
from pydantic import BaseModel, ConfigDict, Field


class GoalBase(BaseModel):
    title: str = Field(..., min_length=1, max_length=100)
    activityType: str = Field(default="Walking", alias="activity_type")
    goalType: str = Field(default="Daily Steps", alias="goal_type")
    targetValue: float = Field(..., gt=0, alias="target_value")
    currentProgress: float = Field(default=0.0, ge=0, alias="current_value")
    unit: str = Field(default="steps", min_length=1, max_length=30)
    frequency: str = Field(default="Daily")
    startDate: str | None = Field(default=None, alias="start_date")
    status: str = Field(default="Active")

    model_config = ConfigDict(
        from_attributes=True,
        populate_by_name=True,
    )


class GoalCreate(GoalBase):
    pass


class GoalUpdate(BaseModel):
    title: str | None = Field(default=None, min_length=1, max_length=100)
    activityType: str | None = Field(default=None, alias="activity_type")
    goalType: str | None = Field(default=None, alias="goal_type")
    targetValue: float | None = Field(default=None, gt=0, alias="target_value")
    currentProgress: float | None = Field(default=None, ge=0, alias="current_value")
    unit: str | None = Field(default=None, min_length=1, max_length=30)
    frequency: str | None = Field(default=None)
    startDate: str | None = Field(default=None, alias="start_date")
    status: str | None = Field(default=None)

    model_config = ConfigDict(
        from_attributes=True,
        populate_by_name=True,
    )


class GoalResponse(GoalBase):
    id: int
    created_at: datetime
    updated_at: datetime

    model_config = ConfigDict(
        from_attributes=True,
        populate_by_name=True,
    )

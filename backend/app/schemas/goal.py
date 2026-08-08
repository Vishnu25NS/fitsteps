from datetime import datetime
from pydantic import BaseModel, ConfigDict, Field


class GoalBase(BaseModel):
    title: str = Field(..., min_length=1, max_length=100)
    activity_type: str = Field(default="Walking", alias="activityType")
    goal_type: str = Field(default="Daily Steps", alias="goalType")
    target_value: float = Field(..., gt=0, alias="targetValue")
    current_value: float = Field(default=0.0, ge=0, alias="currentProgress")
    unit: str = Field(default="steps", min_length=1, max_length=30)
    frequency: str = Field(default="Daily")
    start_date: str | None = Field(default=None, alias="startDate")
    status: str = Field(default="Active")

    model_config = ConfigDict(
        from_attributes=True,
        populate_by_name=True,
    )


class GoalCreate(GoalBase):
    pass


class GoalUpdate(BaseModel):
    title: str | None = Field(default=None, min_length=1, max_length=100)
    activity_type: str | None = Field(default=None, alias="activityType")
    goal_type: str | None = Field(default=None, alias="goalType")
    target_value: float | None = Field(default=None, gt=0, alias="targetValue")
    current_value: float | None = Field(default=None, ge=0, alias="currentProgress")
    unit: str | None = Field(default=None, min_length=1, max_length=30)
    frequency: str | None = Field(default=None)
    start_date: str | None = Field(default=None, alias="startDate")
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

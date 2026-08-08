from datetime import date, datetime

from sqlalchemy import Date, DateTime, Float, Integer, String
from sqlalchemy.orm import Mapped, mapped_column

from app.db import Base


class Goal(Base):
    __tablename__ = "goals"

    id: Mapped[int] = mapped_column(
        Integer,
        primary_key=True,
        index=True,
    )

    title: Mapped[str] = mapped_column(
        String(100),
        nullable=False,
    )

    activity_type: Mapped[str] = mapped_column(
        String(50),
        default="Walking",
        nullable=False,
    )

    goal_type: Mapped[str] = mapped_column(
        String(50),
        default="Daily Steps",
        nullable=False,
    )

    target_value: Mapped[float] = mapped_column(
        Float,
        nullable=False,
    )

    current_value: Mapped[float] = mapped_column(
        Float,
        default=0.0,
        nullable=False,
    )

    unit: Mapped[str] = mapped_column(
        String(30),
        default="steps",
        nullable=False,
    )

    frequency: Mapped[str] = mapped_column(
        String(20),
        default="Daily",
        nullable=False,
    )

    start_date: Mapped[str | None] = mapped_column(
        String(20),
        nullable=True,
    )

    status: Mapped[str] = mapped_column(
        String(20),
        default="Active",
        nullable=False,
    )

    created_at: Mapped[datetime] = mapped_column(
        DateTime,
        default=datetime.utcnow,
        nullable=False,
    )

    updated_at: Mapped[datetime] = mapped_column(
        DateTime,
        default=datetime.utcnow,
        onupdate=datetime.utcnow,
        nullable=False,
    )

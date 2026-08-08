from datetime import datetime

from sqlalchemy import DateTime, Float, Integer, String, Text
from sqlalchemy.orm import Mapped, mapped_column

from app.db import Base


class Activity(Base):
    __tablename__ = "activities"

    id: Mapped[int] = mapped_column(
        Integer,
        primary_key=True,
        index=True,
    )

    title: Mapped[str] = mapped_column(
        String(100),
        default="Workout",
        nullable=False,
    )

    category: Mapped[str] = mapped_column(
        String(50),
        default="Walking",
        nullable=False,
    )

    duration: Mapped[int] = mapped_column(
        Integer,
        nullable=False,
    )

    distance: Mapped[float | None] = mapped_column(
        Float,
        nullable=True,
    )

    calories: Mapped[int | None] = mapped_column(
        Integer,
        nullable=True,
    )

    notes: Mapped[str | None] = mapped_column(
        Text,
        nullable=True,
    )

    date_time: Mapped[datetime] = mapped_column(
        DateTime,
        nullable=False,
    )

    created_at: Mapped[datetime] = mapped_column(
        DateTime,
        default=datetime.utcnow,
        nullable=False,
    )
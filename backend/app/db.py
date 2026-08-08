from sqlalchemy import create_engine
from sqlalchemy.orm import DeclarativeBase, sessionmaker

from app.core.config import settings


# SQLAlchemy Engine
engine = create_engine(
    settings.DATABASE_URL,
    connect_args={"check_same_thread": False},  # Required for SQLite
)


# Session Factory
SessionLocal = sessionmaker(
    autocommit=False,
    autoflush=False,
    bind=engine,
)


# Base class for all ORM models
class Base(DeclarativeBase):
    pass


# Dependency used by FastAPI
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
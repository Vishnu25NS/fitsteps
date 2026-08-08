from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

import app.models
from app.routers import activities, analytics, goals

from app.core.config import settings
from app.db import Base, engine

Base.metadata.create_all(bind=engine)

app = FastAPI(
    title=settings.APP_NAME,
    version="1.0.0",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=False,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(
    activities.router,
    prefix="/activities",
    tags=["Activities"],
)

app.include_router(
    goals.router,
    prefix="/goals",
    tags=["Goals"],
)

app.include_router(
    analytics.router,
    prefix="/analytics",
    tags=["Analytics"],
)


@app.get("/")
def root():
    return {
        "message": "FitSteps API is running",
        "version": "1.0.0",
    }
# FitSteps - Full-Stack Fitness & Activity Tracker

FitSteps is a production-quality, mobile-first full-stack fitness application for tracking daily activities, managing health goals, and visualizing performance metrics.

## Live Backend & API Documentation

- **Local Backend URL**: `http://localhost:8000`
- **OpenAPI Interactive Documentation**: `http://localhost:8000/docs`
- **Render Production Backend URL**: `https://fitsteps-backend.onrender.com` (Configurable via `VITE_API_URL`)

## Features

- **Activities Tracking**: Full CRUD operation for physical activities (Walking, Running, Cycling, Swimming, Yoga, Workouts).
- **Goals Management**: Full CRUD operations for step targets, calorie burn goals, active minutes, and distance milestones.
- **Interactive Dashboard**: Real-time progress visualizers and weekly summary metrics.
- **Performance Analytics**: Visual charts for step counts, activity distribution, and goal completion trends using Recharts.
- **User Profile & Notifications**: Personal metrics management, fitness preferences, and notification feed.
- **Settings & Preferences**: App configuration, dark mode toggle, and unit preferences.

## Tech Stack

- **Backend**: Python, FastAPI, SQLAlchemy 2.0, Pydantic v2, SQLite, Uvicorn
- **Frontend**: React 19, Vite, React Router DOM, Recharts, React Icons, Vanilla CSS
- **API Communication**: Axios with centralized environment configuration, wildcard CORS, and response error interceptors

## Setup & Running Instructions

### 1. Backend Setup

```bash
cd backend
venv\Scripts\activate
uvicorn main:app --reload --host 0.0.0.0 --port 8000
```

### 2. Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

### 3. Production Deployment (Render / Host)

- **Start Command**: `uvicorn main:app --host 0.0.0.0 --port 10000`
- **Environment Variables**: Set `VITE_API_URL` in `frontend/.env` to point to the live backend URL.

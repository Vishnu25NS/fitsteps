# FitSteps - Full-Stack Fitness & Activity Tracker

FitSteps is a production-quality, mobile-first full-stack fitness application for tracking daily activities, managing health goals, and visualizing performance metrics.

## Features

- **Activities Tracking**: Log and manage daily physical activities (Walking, Running, Cycling, Swimming, Yoga, Workouts).
- **Goals Management**: Full CRUD operations for daily step targets, calorie burn goals, and distance milestones.
- **Interactive Dashboard**: Real-time progress visualizers and weekly summary metrics.
- **Performance Analytics**: Visual charts for step counts, activity distribution, and goal completion trends using Recharts.
- **User Profile & Notifications**: Manage personal metrics, fitness preferences, and notification updates.
- **Settings & Preferences**: App configuration, dark mode toggle, and unit preference selection.

## Tech Stack

- **Backend**: Python, FastAPI, SQLAlchemy 2.0, Pydantic v2, SQLite, Uvicorn
- **Frontend**: React 19, Vite, React Router DOM, Recharts, React Icons, Vanilla CSS
- **API Communication**: Axios (with centralized environment configuration and response interceptors)

## Setup & Running Instructions

### Backend Setup

```bash
cd backend
venv\Scripts\activate
uvicorn main:app --reload
```

The backend server will run at `http://localhost:8000`. Interactive API documentation is available at `http://localhost:8000/docs`.

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

The frontend application will run at `http://localhost:5173`.

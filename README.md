# FitSteps – Fitness Tracker

## Live Demo
Frontend: https://fitsteps-lemon.vercel.app  
Backend: https://fitsteps-5dzf.onrender.com/docs

## Features
- Activity tracking (CRUD)
- Goal management (CRUD)
- Analytics dashboard (weekly avg, streaks, best day)
- Activity categorization

## Tech Stack
- FastAPI (Backend)
- React + Vite (Frontend)
- SQLite
- Axios

## Setup

### Backend
cd backend  
pip install -r requirements.txt  
uvicorn app.main:app --reload  

### Frontend
cd frontend  
npm install  
npm run dev  

## Environment

VITE_API_URL=https://fitsteps-5dzf.onrender.com

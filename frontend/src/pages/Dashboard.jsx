import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/layout/Header';
import BottomNavigation from '../components/layout/BottomNavigation';
import FloatingActionButton from '../components/layout/FloatingActionButton';
import Loader from '../components/common/Loader';

import { useDashboardData } from '../features/dashboard/hooks/useDashboardData';
import ProgressSection from '../features/dashboard/components/ProgressSection';
import WeeklySummary from '../features/dashboard/components/WeeklySummary';
import RecentActivities from '../features/dashboard/components/RecentActivities';
import ActivityModal from '../features/activities/components/ActivityModal';
import { createActivity } from '../features/activities/services/activityService';

import './Dashboard.css';

function Dashboard() {
  const navigate = useNavigate();
  const { data, loading, error } = useDashboardData();
  const [isActivityModalOpen, setIsActivityModalOpen] = useState(false);

  if (loading) {
    return (
      <div className="dashboard-page dashboard-loading">
        <Loader size="large" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="dashboard-page dashboard-error">
        <p>Failed to load dashboard data.</p>
      </div>
    );
  }

  const { user, progress, weeklySummary, recentActivities } = data;

  const handleAddActivity = () => {
    setIsActivityModalOpen(true);
  };

  const handleCloseActivityModal = () => {
    setIsActivityModalOpen(false);
  };

  const handleSaveActivity = async (newActivity) => {
    await createActivity(newActivity);
    setIsActivityModalOpen(false);
  };

  const handleSeeAllActivities = () => {
    navigate('/activities');
  };

  return (
    <div className="dashboard-page">
      <Header
        userName={user.userName}
        greeting={user.greeting}
        avatarUrl={user.avatarUrl}
        hasUnreadNotifications={user.hasUnreadNotifications}
      />

      <main className="dashboard-main">
        <ProgressSection
          currentSteps={progress.currentSteps}
          goalSteps={progress.goalSteps}
          calories={progress.calories}
          activeMinutes={progress.activeMinutes}
        />

        <WeeklySummary data={weeklySummary} />

        <RecentActivities
          activities={recentActivities}
          onSeeAllClick={handleSeeAllActivities}
        />
      </main>

      <FloatingActionButton onClick={handleAddActivity} />

      <ActivityModal
        isOpen={isActivityModalOpen}
        onClose={handleCloseActivityModal}
        onSave={handleSaveActivity}
      />

      <BottomNavigation />
    </div>
  );
}

export default Dashboard;
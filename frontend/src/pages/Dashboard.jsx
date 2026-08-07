import React, { useState } from 'react';
import Header from '../components/layout/Header';
import BottomNavigation from '../components/layout/BottomNavigation';
import FloatingActionButton from '../components/layout/FloatingActionButton';
import Loader from '../components/common/Loader';

import { useDashboardData } from '../features/dashboard/hooks/useDashboardData';
import ProgressSection from '../features/dashboard/components/ProgressSection';
import WeeklySummary from '../features/dashboard/components/WeeklySummary';
import RecentActivities from '../features/dashboard/components/RecentActivities';

import './Dashboard.css';

function Dashboard() {
  const [activeTab, setActiveTab] = useState('home');
  const { data, loading, error } = useDashboardData();

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

  const handleNotificationClick = () => {
    console.log('Notification button clicked');
  };

  const handleAddActivity = () => {
    console.log('Add activity FAB clicked');
  };

  const handleSeeAllActivities = () => {
    console.log('See all activities clicked');
  };

  return (
    <div className="dashboard-page">
      <Header
        userName={user.userName}
        greeting={user.greeting}
        avatarUrl={user.avatarUrl}
        hasUnreadNotifications={user.hasUnreadNotifications}
        onNotificationClick={handleNotificationClick}
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

      <BottomNavigation
        activeTab={activeTab}
        onTabChange={(tabId) => setActiveTab(tabId)}
      />
    </div>
  );
}

export default Dashboard;
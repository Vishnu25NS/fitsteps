import React from 'react';
import Header from '../components/layout/Header';
import BottomNavigation from '../components/layout/BottomNavigation';
import Loader from '../components/common/Loader';

import { useAnalyticsData } from '../features/analytics/hooks/useAnalyticsData';
import AnalyticsOverview from '../features/analytics/components/AnalyticsOverview';
import WeeklyStepsChart from '../features/analytics/components/WeeklyStepsChart';
import ActivityDistributionChart from '../features/analytics/components/ActivityDistributionChart';
import GoalCompletionChart from '../features/analytics/components/GoalCompletionChart';

import './Analytics.css';

function Analytics() {
  const { data, loading, error } = useAnalyticsData();

  if (loading) {
    return (
      <div className="analytics-page analytics-loading">
        <Loader size="large" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="analytics-page analytics-error">
        <p>{error}</p>
      </div>
    );
  }

  const { metrics, weeklySteps, activityDistribution, goalCompletionTrend } = data;

  return (
    <div className="analytics-page">
      <Header greeting="Performance" userName="Alex" />

      <main className="analytics-main">
        <AnalyticsOverview metrics={metrics} />

        <WeeklyStepsChart data={weeklySteps} />

        <ActivityDistributionChart data={activityDistribution} />

        <GoalCompletionChart data={goalCompletionTrend} />
      </main>

      <BottomNavigation />
    </div>
  );
}

export default Analytics;

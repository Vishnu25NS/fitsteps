import React from 'react';
import Card from '../../../../components/common/Card';
import './ActivitiesOverview.css';

function ActivitiesOverview({ metrics = { totalWorkouts: 0, totalCalories: 0, totalDuration: 0 } }) {
  const formatDuration = (mins) => {
    if (mins >= 60) {
      const hrs = Math.floor(mins / 60);
      const remainingMins = mins % 60;
      return remainingMins > 0 ? `${hrs}h ${remainingMins}m` : `${hrs}h`;
    }
    return `${mins}m`;
  };

  return (
    <Card className="activities-overview-card">
      <h2 className="activities-overview-title">Activity Summary</h2>
      <div className="activities-overview-stats">
        <div className="overview-stat-box">
          <span className="stat-num workouts">{metrics.totalWorkouts}</span>
          <span className="stat-sublabel">Total Workouts</span>
        </div>
        <div className="overview-stat-box">
          <span className="stat-num calories">{metrics.totalCalories.toLocaleString()}</span>
          <span className="stat-sublabel">kcal Burned</span>
        </div>
        <div className="overview-stat-box">
          <span className="stat-num duration">{formatDuration(metrics.totalDuration)}</span>
          <span className="stat-sublabel">Active Time</span>
        </div>
      </div>
    </Card>
  );
}

export default ActivitiesOverview;

import React from 'react';
import Card from '../../../../components/common/Card';
import './ProfileStats.css';

function ProfileStats({ stats = {} }) {
  const {
    currentStreak = 0,
    totalActivities = 0,
    totalSteps = 0,
    goalsCompleted = 0,
  } = stats;

  return (
    <Card className="profile-stats-card">
      <h3 className="profile-stats-title">All-Time Statistics</h3>

      <div className="profile-stats-grid">
        <div className="profile-stat-box">
          <span className="profile-stat-value">{currentStreak} days</span>
          <span className="profile-stat-label">Current Streak</span>
        </div>

        <div className="profile-stat-box">
          <span className="profile-stat-value">{totalActivities}</span>
          <span className="profile-stat-label">Total Activities</span>
        </div>

        <div className="profile-stat-box">
          <span className="profile-stat-value">
            {totalSteps.toLocaleString()}
          </span>
          <span className="profile-stat-label">Total Steps</span>
        </div>

        <div className="profile-stat-box">
          <span className="profile-stat-value">{goalsCompleted}</span>
          <span className="profile-stat-label">Goals Completed</span>
        </div>
      </div>
    </Card>
  );
}

export default ProfileStats;

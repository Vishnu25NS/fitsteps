import React from 'react';
import Card from '../../../../components/common/Card';
import './GoalsOverview.css';

function GoalsOverview({ metrics = { totalGoals: 0, activeGoals: 0, completedGoals: 0 } }) {
  return (
    <Card className="goals-overview-card">
      <h2 className="goals-overview-title">Goals Overview</h2>
      <div className="goals-overview-stats">
        <div className="overview-stat-item">
          <span className="stat-value total">{metrics.totalGoals}</span>
          <span className="stat-label">Total Goals</span>
        </div>
        <div className="overview-stat-item">
          <span className="stat-value active">{metrics.activeGoals}</span>
          <span className="stat-label">Active</span>
        </div>
        <div className="overview-stat-item">
          <span className="stat-value completed">{metrics.completedGoals}</span>
          <span className="stat-label">Completed</span>
        </div>
      </div>
    </Card>
  );
}

export default GoalsOverview;

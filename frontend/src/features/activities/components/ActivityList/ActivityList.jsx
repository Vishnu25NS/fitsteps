import React from 'react';
import { MdDirectionsRun } from 'react-icons/md';
import ActivityCard from '../ActivityCard';
import Card from '../../../../components/common/Card';
import Button from '../../../../components/common/Button';
import './ActivityList.css';

function ActivityList({ activities = [], onEdit, onDelete, onCreateClick }) {
  if (activities.length === 0) {
    return (
      <Card className="activities-empty-state">
        <MdDirectionsRun className="empty-state-icon" />
        <h3 className="empty-state-heading">No Workouts Recorded</h3>
        <p className="empty-state-text">
          Log your walks, runs, cycling, swimming, and workouts to track your daily progress.
        </p>
        <Button
          variant="primary"
          className="log-first-activity-btn"
          onClick={onCreateClick}
        >
          Log Your First Activity
        </Button>
      </Card>
    );
  }

  return (
    <div className="activity-list-container">
      <h2 className="activity-list-title">Recent Workouts</h2>
      {activities.map((activity) => (
        <ActivityCard
          key={activity.id}
          activity={activity}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

export default ActivityList;

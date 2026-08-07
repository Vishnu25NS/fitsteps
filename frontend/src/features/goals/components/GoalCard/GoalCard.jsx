import React from 'react';
import {
  MdDirectionsWalk,
  MdDirectionsRun,
  MdDirectionsBike,
  MdFitnessCenter,
  MdEdit,
  MdDeleteOutline,
} from 'react-icons/md';
import Card from '../../../../components/common/Card';
import Button from '../../../../components/common/Button';
import './GoalCard.css';

const ACTIVITY_ICON_MAP = {
  Walking: MdDirectionsWalk,
  Running: MdDirectionsRun,
  Cycling: MdDirectionsBike,
  Workout: MdFitnessCenter,
};

function GoalCard({ goal, onEdit, onDelete }) {
  const IconComponent = ACTIVITY_ICON_MAP[goal.activityType] || MdFitnessCenter;
  const progressRatio = Math.min(
    (goal.currentProgress / (goal.targetValue || 1)) * 100,
    100
  );
  const isCompleted = goal.status === 'Completed' || progressRatio >= 100;

  return (
    <Card className="goal-card" hoverable>
      <div className="goal-card-header">
        <div className="goal-title-wrapper">
          <div className={`goal-activity-icon ${goal.activityType.toLowerCase()}`}>
            <IconComponent />
          </div>
          <div>
            <h3 className="goal-title-text">{goal.title}</h3>
            <p className="goal-subtitle">
              {goal.activityType} • {goal.goalType}
            </p>
          </div>
        </div>
        <span className={`goal-status-badge ${isCompleted ? 'completed' : 'active'}`}>
          {isCompleted ? 'Completed' : 'Active'}
        </span>
      </div>

      <div className="goal-progress-container">
        <div className="goal-progress-bar-bg">
          <div
            className={`goal-progress-bar-fg ${isCompleted ? 'completed' : ''}`}
            style={{ width: `${progressRatio}%` }}
          />
        </div>
        <div className="goal-progress-stats">
          <span className="goal-progress-text">
            {goal.currentProgress.toLocaleString()} {goal.unit}
          </span>
          <span className="goal-target-text">
            / {goal.targetValue.toLocaleString()} {goal.unit}
          </span>
        </div>
      </div>

      <div className="goal-card-footer">
        <div className="goal-meta-info">
          <span>{goal.frequency}</span>
          <span>•</span>
          <span>From {goal.startDate}</span>
        </div>
        <div className="goal-actions">
          <Button
            variant="icon"
            onClick={() => onEdit(goal)}
            ariaLabel={`Edit ${goal.title}`}
            style={{ width: '32px', height: '32px' }}
          >
            <MdEdit className="action-btn-icon" />
          </Button>
          <Button
            variant="icon"
            onClick={() => onDelete(goal.id)}
            ariaLabel={`Delete ${goal.title}`}
            style={{ width: '32px', height: '32px', color: 'var(--color-error)' }}
          >
            <MdDeleteOutline className="action-btn-icon" />
          </Button>
        </div>
      </div>
    </Card>
  );
}

export default GoalCard;

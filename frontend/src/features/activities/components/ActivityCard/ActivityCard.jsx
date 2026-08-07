import React from 'react';
import {
  MdDirectionsWalk,
  MdDirectionsRun,
  MdDirectionsBike,
  MdFitnessCenter,
  MdPool,
  MdSelfImprovement,
  MdHiking,
  MdSportsGymnastics,
  MdEdit,
  MdDeleteOutline,
} from 'react-icons/md';
import Card from '../../../../components/common/Card';
import Button from '../../../../components/common/Button';
import './ActivityCard.css';

const CATEGORY_ICON_MAP = {
  Walking: MdDirectionsWalk,
  Running: MdDirectionsRun,
  Cycling: MdDirectionsBike,
  Workout: MdFitnessCenter,
  Swimming: MdPool,
  Yoga: MdSelfImprovement,
  Hiking: MdHiking,
  Other: MdSportsGymnastics,
};

function ActivityCard({ activity, onEdit, onDelete }) {
  const IconComponent = CATEGORY_ICON_MAP[activity.category] || MdFitnessCenter;

  const formatDate = (rawDate) => {
    if (!rawDate) return '';
    const dateObj = new Date(rawDate);
    return dateObj.toLocaleString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
    });
  };

  return (
    <Card className="activity-card" hoverable>
      <div className="activity-card-header">
        <div className="activity-card-title-group">
          <div className={`activity-badge-icon ${activity.category.toLowerCase()}`}>
            <IconComponent />
          </div>
          <div>
            <h3 className="activity-card-name">{activity.title}</h3>
            <p className="activity-card-category">{activity.category}</p>
          </div>
        </div>
        <span className="activity-card-datetime">{formatDate(activity.dateTime)}</span>
      </div>

      <div className="activity-stats-row">
        <div className="activity-stat-chip">
          <span>{activity.duration}</span>
          <span className="activity-stat-label">mins</span>
        </div>
        {Number(activity.distance) > 0 && (
          <div className="activity-stat-chip">
            <span>{activity.distance}</span>
            <span className="activity-stat-label">km</span>
          </div>
        )}
        <div className="activity-stat-chip">
          <span>{activity.calories}</span>
          <span className="activity-stat-label">kcal</span>
        </div>
      </div>

      {activity.notes && (
        <div className="activity-notes-box">
          "{activity.notes}"
        </div>
      )}

      <div className="activity-card-footer">
        <Button
          variant="icon"
          onClick={() => onEdit(activity)}
          ariaLabel={`Edit ${activity.title}`}
          style={{ width: '32px', height: '32px' }}
        >
          <MdEdit className="action-btn-icon" />
        </Button>
        <Button
          variant="icon"
          onClick={() => onDelete(activity.id)}
          ariaLabel={`Delete ${activity.title}`}
          style={{ width: '32px', height: '32px', color: 'var(--color-error)' }}
        >
          <MdDeleteOutline className="action-btn-icon" />
        </Button>
      </div>
    </Card>
  );
}

export default ActivityCard;

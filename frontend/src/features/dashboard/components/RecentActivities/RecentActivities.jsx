import React from 'react';
import { MdDirectionsWalk, MdDirectionsBike, MdPool } from 'react-icons/md';
import Card from '../../../../components/common/Card';
import Button from '../../../../components/common/Button';
import './RecentActivities.css';

const ICON_MAP = {
  walk: MdDirectionsWalk,
  bike: MdDirectionsBike,
  swim: MdPool,
};

function RecentActivities({ activities = [], onSeeAllClick }) {
  return (
    <section className="recent-activities-section">
      <div className="activities-header">
        <h2 className="activities-title">Recent Activity</h2>
        <Button variant="text" onClick={onSeeAllClick}>
          See all
        </Button>
      </div>

      <Card className="activities-list-card">
        {activities.map((item) => {
          const IconComponent = ICON_MAP[item.type] || MdDirectionsWalk;
          return (
            <div key={item.id} className="activity-item">
              <div className={`activity-icon-badge ${item.type}`}>
                <IconComponent className="activity-icon" />
              </div>
              <div className="activity-details">
                <h3 className="activity-name">{item.title}</h3>
                <p className="activity-meta">{item.meta}</p>
              </div>
              <div className="activity-stats">
                <span className="activity-calories">{item.calories}</span>
                <span className="activity-time">{item.time}</span>
              </div>
            </div>
          );
        })}
      </Card>
    </section>
  );
}

export default RecentActivities;

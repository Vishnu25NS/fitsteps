import React from 'react';
import {
  MdEmojiEvents,
  MdLocalFireDepartment,
  MdDirectionsWalk,
  MdBarChart,
  MdAutoAwesome,
  MdMilitaryTech,
  MdCheck,
  MdDeleteOutline,
} from 'react-icons/md';
import Card from '../../../../components/common/Card';
import Button from '../../../../components/common/Button';
import './NotificationCard.css';

const NOTIF_ICON_MAP = {
  goal_achieved: MdEmojiEvents,
  streak_reminder: MdLocalFireDepartment,
  activity_reminder: MdDirectionsWalk,
  weekly_summary: MdBarChart,
  ai_recommendation: MdAutoAwesome,
  badge_earned: MdMilitaryTech,
};

function NotificationCard({ notification, onMarkRead, onDelete }) {
  const { id, type, title, description, timestamp, isRead } = notification;

  const IconComponent = NOTIF_ICON_MAP[type] || MdDirectionsWalk;

  return (
    <Card className={`notif-card ${!isRead ? 'unread' : ''}`} hoverable>
      <div className={`notif-icon-badge ${type}`}>
        <IconComponent />
      </div>

      <div className="notif-content">
        <div className="notif-title-row">
          <h3 className="notif-title">
            {!isRead && <span className="notif-unread-dot" />}{' '}
            {title}
          </h3>
          <span className="notif-timestamp">{timestamp}</span>
        </div>

        <p className="notif-description">{description}</p>

        <div className="notif-actions">
          {!isRead && (
            <Button
              variant="text"
              onClick={() => onMarkRead(id)}
              style={{ fontSize: '12px', padding: '4px 8px' }}
            >
              <MdCheck style={{ marginRight: '4px' }} /> Mark read
            </Button>
          )}

          <Button
            variant="icon"
            onClick={() => onDelete(id)}
            ariaLabel="Delete notification"
            style={{ width: '28px', height: '28px', color: 'var(--color-outline)' }}
          >
            <MdDeleteOutline style={{ fontSize: '18px' }} />
          </Button>
        </div>
      </div>
    </Card>
  );
}

export default NotificationCard;

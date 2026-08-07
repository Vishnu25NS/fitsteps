import React from 'react';
import Card from '../../../../components/common/Card';
import Button from '../../../../components/common/Button';
import './NotificationHeader.css';

function NotificationHeader({ unreadCount = 0, onMarkAllRead }) {
  return (
    <Card className="notif-toolbar-card">
      <div className="notif-toolbar-left">
        <h2 className="notif-toolbar-title">Notifications</h2>
        {unreadCount > 0 && (
          <span className="notif-badge-chip">{unreadCount} New</span>
        )}
      </div>

      {unreadCount > 0 && (
        <Button
          variant="text"
          className="mark-all-read-btn"
          onClick={onMarkAllRead}
        >
          Mark all as read
        </Button>
      )}
    </Card>
  );
}

export default NotificationHeader;

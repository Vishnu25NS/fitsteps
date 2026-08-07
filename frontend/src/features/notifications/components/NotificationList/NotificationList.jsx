import React from 'react';
import { MdNotificationsNone } from 'react-icons/md';
import NotificationCard from '../NotificationCard';
import Card from '../../../../components/common/Card';
import './NotificationList.css';

function NotificationList({ notifications = [], onMarkRead, onDelete }) {
  if (notifications.length === 0) {
    return (
      <Card className="notif-empty-state">
        <MdNotificationsNone className="notif-empty-icon" />
        <h3 className="notif-empty-title">All Caught Up!</h3>
        <p className="notif-empty-text">
          You have no new notifications right now. Keep pushing towards your daily fitness goals!
        </p>
      </Card>
    );
  }

  return (
    <div className="notif-list-container">
      {notifications.map((notification) => (
        <NotificationCard
          key={notification.id}
          notification={notification}
          onMarkRead={onMarkRead}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

export default NotificationList;

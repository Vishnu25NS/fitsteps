import React from 'react';
import Header from '../components/layout/Header';
import BottomNavigation from '../components/layout/BottomNavigation';
import Loader from '../components/common/Loader';

import { useNotificationsData } from '../features/notifications/hooks/useNotificationsData';
import NotificationHeader from '../features/notifications/components/NotificationHeader';
import NotificationList from '../features/notifications/components/NotificationList';

import './Notifications.css';

function Notifications() {
  const {
    notifications,
    loading,
    error,
    unreadCount,
    handleMarkAsRead,
    handleMarkAllAsRead,
    handleDeleteNotification,
  } = useNotificationsData();

  if (loading) {
    return (
      <div className="notifications-page notifications-loading">
        <Loader size="large" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="notifications-page notifications-error">
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="notifications-page">
      <Header greeting="Notification Center" userName="Alex" />

      <main className="notifications-main">
        <NotificationHeader
          unreadCount={unreadCount}
          onMarkAllRead={handleMarkAllAsRead}
        />

        <NotificationList
          notifications={notifications}
          onMarkRead={handleMarkAsRead}
          onDelete={handleDeleteNotification}
        />
      </main>

      <BottomNavigation />
    </div>
  );
}

export default Notifications;

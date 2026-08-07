import { useState, useEffect, useCallback, useMemo } from 'react';
import {
  fetchNotifications,
  markAsRead,
  markAllAsRead,
  deleteNotification,
} from '../services/notificationService';

export function useNotificationsData() {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadNotifications = useCallback(async () => {
    try {
      setLoading(true);
      const data = await fetchNotifications();
      setNotifications(data);
      setError(null);
    } catch (err) {
      setError('Failed to fetch notifications.');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadNotifications();
  }, [loadNotifications]);

  const unreadCount = useMemo(() => {
    return notifications.filter((n) => !n.isRead).length;
  }, [notifications]);

  const handleMarkAsRead = async (id) => {
    // Optimistic UI update
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, isRead: true } : n))
    );
    try {
      await markAsRead(id);
    } catch (err) {
      loadNotifications();
    }
  };

  const handleMarkAllAsRead = async () => {
    // Optimistic UI update
    setNotifications((prev) => prev.map((n) => ({ ...n, isRead: true })));
    try {
      await markAllAsRead();
    } catch (err) {
      loadNotifications();
    }
  };

  const handleDeleteNotification = async (id) => {
    // Optimistic UI update
    setNotifications((prev) => prev.filter((n) => n.id !== id));
    try {
      await deleteNotification(id);
    } catch (err) {
      loadNotifications();
    }
  };

  return {
    notifications,
    loading,
    error,
    unreadCount,
    handleMarkAsRead,
    handleMarkAllAsRead,
    handleDeleteNotification,
  };
}

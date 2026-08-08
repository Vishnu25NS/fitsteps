import { useState, useEffect, useCallback } from 'react';
import {
  fetchActivities,
  createActivity,
  updateActivity,
  deleteActivity,
} from '../services/activityService';

export function useActivitiesData() {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingActivity, setEditingActivity] = useState(null);

  const loadActivities = useCallback(async () => {
    try {
      setLoading(true);
      const data = await fetchActivities();
      setActivities(Array.isArray(data) ? data : []);
      setError(null);
    } catch (err) {
      setError(err?.message || 'Failed to fetch activity history.');
      setActivities([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadActivities();
  }, [loadActivities]);

  const handleOpenAddModal = () => {
    setEditingActivity(null);
    setIsModalOpen(true);
  };

  const handleOpenEditModal = (activity) => {
    setEditingActivity(activity);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingActivity(null);
  };

  const handleSaveActivity = async (formData) => {
    try {
      if (editingActivity) {
        await updateActivity(editingActivity.id, formData);
      } else {
        await createActivity(formData);
      }
      await loadActivities();
      handleCloseModal();
    } catch (err) {
      console.error('Error saving activity:', err);
    }
  };

  const handleDeleteActivity = async (id) => {
    try {
      await deleteActivity(id);
      await loadActivities();
    } catch (err) {
      console.error('Error deleting activity:', err);
    }
  };

  // Summary Metrics
  const safeActivities = Array.isArray(activities) ? activities : [];
  const totalWorkouts = safeActivities.length;
  const totalCalories = safeActivities.reduce((sum, a) => sum + (Number(a.calories) || 0), 0);
  const totalDuration = safeActivities.reduce((sum, a) => sum + (Number(a.duration) || 0), 0);

  return {
    activities: safeActivities,
    loading,
    error,
    isModalOpen,
    editingActivity,
    metrics: { totalWorkouts, totalCalories, totalDuration },
    handleOpenAddModal,
    handleOpenEditModal,
    handleCloseModal,
    handleSaveActivity,
    handleDeleteActivity,
  };
}

import { useState, useEffect, useCallback } from 'react';
import { fetchGoals, createGoal, updateGoal, deleteGoal } from '../services/goalService';

export function useGoalsData() {
  const [goals, setGoals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingGoal, setEditingGoal] = useState(null);

  const loadGoals = useCallback(async () => {
    try {
      setLoading(true);
      const data = await fetchGoals();
      setGoals(Array.isArray(data) ? data : []);
      setError(null);
    } catch (err) {
      setError(err?.message || 'Failed to fetch goals.');
      setGoals([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadGoals();
  }, [loadGoals]);

  const handleOpenAddModal = () => {
    setEditingGoal(null);
    setIsModalOpen(true);
  };

  const handleOpenEditModal = (goal) => {
    setEditingGoal(goal);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingGoal(null);
  };

  const handleSaveGoal = async (formData) => {
    try {
      if (editingGoal) {
        await updateGoal(editingGoal.id, formData);
      } else {
        await createGoal(formData);
      }
      await loadGoals();
      handleCloseModal();
    } catch (err) {
      console.error('Error saving goal:', err);
    }
  };

  const handleDeleteGoal = async (id) => {
    try {
      await deleteGoal(id);
      await loadGoals();
    } catch (err) {
      console.error('Error deleting goal:', err);
    }
  };

  // Overview metrics
  const safeGoals = Array.isArray(goals) ? goals : [];
  const totalGoals = safeGoals.length;
  const activeGoals = safeGoals.filter((g) => g.status === 'Active').length;
  const completedGoals = safeGoals.filter((g) => g.status === 'Completed').length;

  return {
    goals: safeGoals,
    loading,
    error,
    isModalOpen,
    editingGoal,
    metrics: { totalGoals, activeGoals, completedGoals },
    handleOpenAddModal,
    handleOpenEditModal,
    handleCloseModal,
    handleSaveGoal,
    handleDeleteGoal,
  };
}

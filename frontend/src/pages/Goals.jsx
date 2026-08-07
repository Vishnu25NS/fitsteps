import React from 'react';
import Header from '../components/layout/Header';
import BottomNavigation from '../components/layout/BottomNavigation';
import FloatingActionButton from '../components/layout/FloatingActionButton';
import Loader from '../components/common/Loader';

import { useGoalsData } from '../features/goals/hooks/useGoalsData';
import GoalsOverview from '../features/goals/components/GoalsOverview';
import GoalList from '../features/goals/components/GoalList';
import GoalModal from '../features/goals/components/GoalModal';

import './Goals.css';

function Goals() {
  const {
    goals,
    loading,
    error,
    isModalOpen,
    editingGoal,
    metrics,
    handleOpenAddModal,
    handleOpenEditModal,
    handleCloseModal,
    handleSaveGoal,
    handleDeleteGoal,
  } = useGoalsData();

  if (loading) {
    return (
      <div className="goals-page goals-loading">
        <Loader size="large" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="goals-page goals-error">
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="goals-page">
      <Header greeting="Fitness Goals" userName="Alex" />

      <main className="goals-main">
        <GoalsOverview metrics={metrics} />

        <GoalList
          goals={goals}
          onEdit={handleOpenEditModal}
          onDelete={handleDeleteGoal}
          onCreateClick={handleOpenAddModal}
        />
      </main>

      <FloatingActionButton onClick={handleOpenAddModal} />

      <GoalModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSave={handleSaveGoal}
        initialData={editingGoal}
      />

      <BottomNavigation />
    </div>
  );
}

export default Goals;

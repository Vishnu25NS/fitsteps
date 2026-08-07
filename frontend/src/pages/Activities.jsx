import React from 'react';
import Header from '../components/layout/Header';
import BottomNavigation from '../components/layout/BottomNavigation';
import FloatingActionButton from '../components/layout/FloatingActionButton';
import Loader from '../components/common/Loader';

import { useActivitiesData } from '../features/activities/hooks/useActivitiesData';
import ActivitiesOverview from '../features/activities/components/ActivitiesOverview';
import ActivityList from '../features/activities/components/ActivityList';
import ActivityModal from '../features/activities/components/ActivityModal';

import './Activities.css';

function Activities() {
  const {
    activities,
    loading,
    error,
    isModalOpen,
    editingActivity,
    metrics,
    handleOpenAddModal,
    handleOpenEditModal,
    handleCloseModal,
    handleSaveActivity,
    handleDeleteActivity,
  } = useActivitiesData();

  if (loading) {
    return (
      <div className="activities-page activities-loading">
        <Loader size="large" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="activities-page activities-error">
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="activities-page">
      <Header greeting="Activity Log" userName="Alex" />

      <main className="activities-main">
        <ActivitiesOverview metrics={metrics} />

        <ActivityList
          activities={activities}
          onEdit={handleOpenEditModal}
          onDelete={handleDeleteActivity}
          onCreateClick={handleOpenAddModal}
        />
      </main>

      <FloatingActionButton onClick={handleOpenAddModal} />

      <ActivityModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSave={handleSaveActivity}
        initialData={editingActivity}
      />

      <BottomNavigation />
    </div>
  );
}

export default Activities;

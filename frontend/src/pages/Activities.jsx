import React from 'react';
import Header from '../components/layout/Header';
import BottomNavigation from '../components/layout/BottomNavigation';
import FloatingActionButton from '../components/layout/FloatingActionButton';
import './Dashboard.css';

function Activities() {
  return (
    <div className="dashboard-page">
      <Header greeting="Activity Log" userName="Alex" />
      <main className="dashboard-main">
        <h2 style={{ fontSize: '20px', fontWeight: 600, color: 'var(--color-on-surface)' }}>
          All Activities
        </h2>
        <p style={{ fontSize: '14px', color: 'var(--color-on-surface-variant)' }}>
          View detailed history of all your recorded workouts.
        </p>
      </main>
      <FloatingActionButton onClick={() => console.log('Log workout')} />
      <BottomNavigation />
    </div>
  );
}

export default Activities;

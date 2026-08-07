import React from 'react';
import Header from '../components/layout/Header';
import BottomNavigation from '../components/layout/BottomNavigation';
import FloatingActionButton from '../components/layout/FloatingActionButton';
import './Dashboard.css';

function Analytics() {
  return (
    <div className="dashboard-page">
      <Header greeting="Performance" userName="Alex" />
      <main className="dashboard-main">
        <h2 style={{ fontSize: '20px', fontWeight: 600, color: 'var(--color-on-surface)' }}>
          Analytics & Trends
        </h2>
        <p style={{ fontSize: '14px', color: 'var(--color-on-surface-variant)' }}>
          Insights into your weekly and monthly fitness performance.
        </p>
      </main>
      <FloatingActionButton onClick={() => console.log('Action')} />
      <BottomNavigation />
    </div>
  );
}

export default Analytics;

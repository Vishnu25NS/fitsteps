import React from 'react';
import Header from '../components/layout/Header';
import BottomNavigation from '../components/layout/BottomNavigation';
import './Dashboard.css';

function Settings() {
  return (
    <div className="dashboard-page">
      <Header greeting="App Preferences" userName="Alex" />
      <main className="dashboard-main">
        <h2 style={{ fontSize: '20px', fontWeight: 600, color: 'var(--color-on-surface)' }}>
          Settings
        </h2>
        <p style={{ fontSize: '14px', color: 'var(--color-on-surface-variant)' }}>
          App notifications, units, integrations, and preferences.
        </p>
      </main>
      <BottomNavigation />
    </div>
  );
}

export default Settings;

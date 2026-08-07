import React from 'react';
import Header from '../components/layout/Header';
import BottomNavigation from '../components/layout/BottomNavigation';
import './Dashboard.css';

function Profile() {
  return (
    <div className="dashboard-page">
      <Header greeting="User Profile" userName="Alex" />
      <main className="dashboard-main">
        <h2 style={{ fontSize: '20px', fontWeight: 600, color: 'var(--color-on-surface)' }}>
          My Profile
        </h2>
        <p style={{ fontSize: '14px', color: 'var(--color-on-surface-variant)' }}>
          Manage your personal details, physical metrics, and account.
        </p>
      </main>
      <BottomNavigation />
    </div>
  );
}

export default Profile;

import React from 'react';
import Header from '../components/layout/Header';
import BottomNavigation from '../components/layout/BottomNavigation';
import Loader from '../components/common/Loader';

import { useSettingsData } from '../features/settings/hooks/useSettingsData';
import ProfileCard from '../features/settings/components/ProfileCard';
import PreferenceToggle from '../features/settings/components/PreferenceToggle';
import AboutSection from '../features/settings/components/AboutSection';

import './Settings.css';

function Settings() {
  const { settings, loading, error, handleTogglePreference } = useSettingsData();

  if (loading) {
    return (
      <div className="settings-page settings-loading">
        <Loader size="large" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="settings-page settings-error">
        <p>{error}</p>
      </div>
    );
  }

  const { profile, preferences, about } = settings;

  return (
    <div className="settings-page">
      <Header greeting="Preferences" userName="Alex" />

      <main className="settings-main">
        <ProfileCard profile={profile} />

        <PreferenceToggle
          preferences={preferences}
          onToggle={handleTogglePreference}
        />

        <AboutSection about={about} />
      </main>

      <BottomNavigation />
    </div>
  );
}

export default Settings;

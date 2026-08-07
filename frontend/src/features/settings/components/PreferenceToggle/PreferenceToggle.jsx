import React from 'react';
import {
  MdNotifications,
  MdDarkMode,
  MdAlarm,
  MdStraighten,
} from 'react-icons/md';
import Card from '../../../../components/common/Card';
import './PreferenceToggle.css';

function PreferenceToggle({ preferences = {}, onToggle }) {
  const {
    notifications = true,
    darkMode = false,
    dailyGoalReminder = true,
    units = 'Metric',
  } = preferences;

  return (
    <Card className="preferences-card">
      <h3 className="preferences-title">Preferences</h3>

      {/* Notifications */}
      <div className="preference-row">
        <div className="preference-info">
          <MdNotifications className="preference-icon" />
          <span className="preference-label">Push Notifications</span>
        </div>
        <label className="switch-control">
          <input
            type="checkbox"
            checked={notifications}
            onChange={(e) => onToggle('notifications', e.target.checked)}
          />
          <span className="switch-slider" />
        </label>
      </div>

      {/* Dark Mode */}
      <div className="preference-row">
        <div className="preference-info">
          <MdDarkMode className="preference-icon" />
          <span className="preference-label">Dark Mode</span>
        </div>
        <label className="switch-control">
          <input
            type="checkbox"
            checked={darkMode}
            onChange={(e) => onToggle('darkMode', e.target.checked)}
          />
          <span className="switch-slider" />
        </label>
      </div>

      {/* Daily Goal Reminder */}
      <div className="preference-row">
        <div className="preference-info">
          <MdAlarm className="preference-icon" />
          <span className="preference-label">Daily Goal Reminder</span>
        </div>
        <label className="switch-control">
          <input
            type="checkbox"
            checked={dailyGoalReminder}
            onChange={(e) => onToggle('dailyGoalReminder', e.target.checked)}
          />
          <span className="switch-slider" />
        </label>
      </div>

      {/* Units */}
      <div className="preference-row">
        <div className="preference-info">
          <MdStraighten className="preference-icon" />
          <span className="preference-label">Units</span>
        </div>
        <div className="units-segmented-control">
          <button
            type="button"
            className={`segmented-btn ${units === 'Metric' ? 'active' : ''}`}
            onClick={() => onToggle('units', 'Metric')}
          >
            Metric
          </button>
          <button
            type="button"
            className={`segmented-btn ${units === 'Imperial' ? 'active' : ''}`}
            onClick={() => onToggle('units', 'Imperial')}
          >
            Imperial
          </button>
        </div>
      </div>
    </Card>
  );
}

export default PreferenceToggle;

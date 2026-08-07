import React from 'react';
import { MdHome, MdLeaderboard, MdEditNote, MdSettings } from 'react-icons/md';
import './BottomNavigation.css';

function BottomNavigation({ activeTab = 'home', onTabChange }) {
  const tabs = [
    { id: 'home', label: 'Home', icon: MdHome },
    { id: 'analytics', label: 'Analytics', icon: MdLeaderboard },
    { id: 'checkin', label: 'Check-in', icon: MdEditNote },
    { id: 'settings', label: 'Settings', icon: MdSettings },
  ];

  return (
    <nav className="bottom-nav">
      {tabs.map((tab) => {
        const IconComponent = tab.icon;
        const isActive = activeTab === tab.id;
        return (
          <button
            key={tab.id}
            className={`nav-item ${isActive ? 'active' : ''}`}
            onClick={() => onTabChange && onTabChange(tab.id)}
          >
            <IconComponent className="nav-icon" />
            <span className="nav-label">{tab.label}</span>
          </button>
        );
      })}
    </nav>
  );
}

export default BottomNavigation;

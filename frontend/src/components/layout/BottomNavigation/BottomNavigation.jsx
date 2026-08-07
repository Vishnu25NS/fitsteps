import React from 'react';
import { NavLink } from 'react-router-dom';
import { MdHome, MdLeaderboard, MdFlag, MdDirectionsRun, MdSettings } from 'react-icons/md';
import './BottomNavigation.css';

function BottomNavigation() {
  const navItems = [
    { path: '/', label: 'Home', icon: MdHome },
    { path: '/analytics', label: 'Analytics', icon: MdLeaderboard },
    { path: '/goals', label: 'Goals', icon: MdFlag },
    { path: '/activities', label: 'Activities', icon: MdDirectionsRun },
    { path: '/settings', label: 'Settings', icon: MdSettings },
  ];

  return (
    <nav className="bottom-nav">
      {navItems.map((item) => {
        const IconComponent = item.icon;
        return (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
            end={item.path === '/'}
          >
            <IconComponent className="nav-icon" />
            <span className="nav-label">{item.label}</span>
          </NavLink>
        );
      })}
    </nav>
  );
}

export default BottomNavigation;

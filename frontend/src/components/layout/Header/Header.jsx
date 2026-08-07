import React from 'react';
import { IoNotifications } from 'react-icons/io5';
import Avatar from '../../common/Avatar';
import Button from '../../common/Button';
import './Header.css';

function Header({
  userName = "Alex",
  greeting = "Good morning,",
  avatarUrl,
  hasUnreadNotifications = true,
  onNotificationClick,
}) {
  return (
    <header className="fitsteps-header">
      <div className="header-user-info">
        <Avatar src={avatarUrl} alt={`${userName}'s profile avatar`} size={40} />
        <div className="user-greeting">
          <span className="greeting-text">{greeting}</span>
          <h1 className="user-name">{userName}</h1>
        </div>
      </div>
      <Button
        variant="icon"
        onClick={onNotificationClick}
        ariaLabel="Notifications"
      >
        <IoNotifications className="notification-icon" />
        {hasUnreadNotifications && <span className="notification-dot" />}
      </Button>
    </header>
  );
}

export default Header;

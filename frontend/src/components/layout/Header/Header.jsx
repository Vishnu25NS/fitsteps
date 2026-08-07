import React from 'react';
import { useNavigate } from 'react-router-dom';
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
  onAvatarClick,
}) {
  const navigate = useNavigate();

  const handleAvatarClick = (e) => {
    if (onAvatarClick) {
      onAvatarClick(e);
    } else {
      navigate('/profile');
    }
  };

  const handleNotifClick = (e) => {
    if (onNotificationClick) {
      onNotificationClick(e);
    } else {
      navigate('/notifications');
    }
  };

  return (
    <header className="fitsteps-header">
      <div
        className="header-user-info"
        onClick={handleAvatarClick}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            handleAvatarClick(e);
          }
        }}
      >
        <Avatar src={avatarUrl} alt={`${userName}'s profile avatar`} size={40} />
        <div className="user-greeting">
          <span className="greeting-text">{greeting}</span>
          <h1 className="user-name">{userName}</h1>
        </div>
      </div>
      <Button
        variant="icon"
        onClick={handleNotifClick}
        ariaLabel="Notifications"
      >
        <IoNotifications className="notification-icon" />
        {hasUnreadNotifications && <span className="notification-dot" />}
      </Button>
    </header>
  );
}

export default Header;

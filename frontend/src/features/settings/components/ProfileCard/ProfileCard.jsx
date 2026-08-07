import React from 'react';
import Card from '../../../../components/common/Card';
import Avatar from '../../../../components/common/Avatar';
import './ProfileCard.css';

function ProfileCard({ profile = {} }) {
  const { userName = 'User', email = '', avatarUrl } = profile;

  return (
    <Card className="settings-profile-card" hoverable>
      <Avatar src={avatarUrl} alt={`${userName}'s avatar`} size={56} />
      <div className="profile-card-details">
        <h2 className="profile-card-name">{userName}</h2>
        <p className="profile-card-email">{email}</p>
      </div>
    </Card>
  );
}

export default ProfileCard;

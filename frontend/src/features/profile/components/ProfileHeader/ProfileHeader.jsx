import React from 'react';
import { MdCameraAlt } from 'react-icons/md';
import Avatar from '../../../../components/common/Avatar';
import Card from '../../../../components/common/Card';
import './ProfileHeader.css';

function ProfileHeader({ personal = {}, onEditPhoto }) {
  const { fullName = 'User', email = '', avatarUrl } = personal;

  return (
    <Card className="profile-header-card">
      <div className="profile-avatar-wrapper">
        <Avatar src={avatarUrl} alt={`${fullName}'s profile avatar`} size={80} />
        <button
          type="button"
          className="edit-photo-btn"
          onClick={onEditPhoto}
          aria-label="Edit profile photo"
        >
          <MdCameraAlt className="edit-photo-icon" />
        </button>
      </div>

      <h2 className="profile-header-name">{fullName}</h2>
      <p className="profile-header-email">{email}</p>
    </Card>
  );
}

export default ProfileHeader;

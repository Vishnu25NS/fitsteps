import React from 'react';
import Header from '../components/layout/Header';
import BottomNavigation from '../components/layout/BottomNavigation';
import Button from '../components/common/Button';
import Loader from '../components/common/Loader';

import { useProfileData } from '../features/profile/hooks/useProfileData';
import ProfileHeader from '../features/profile/components/ProfileHeader';
import PersonalInfoForm from '../features/profile/components/PersonalInfoForm';
import FitnessInfoForm from '../features/profile/components/FitnessInfoForm';
import ProfileStats from '../features/profile/components/ProfileStats';

import './Profile.css';

function Profile() {
  const {
    formData,
    stats,
    loading,
    saving,
    error,
    successMessage,
    validationErrors,
    handlePersonalChange,
    handleFitnessChange,
    handleSaveProfile,
    handleResetProfile,
  } = useProfileData();

  if (loading) {
    return (
      <div className="profile-page profile-loading">
        <Loader size="large" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="profile-page profile-error">
        <p>{error}</p>
      </div>
    );
  }

  const handleEditPhoto = () => {
    console.log('Edit profile photo clicked');
  };

  return (
    <div className="profile-page">
      <Header greeting="My Account" userName={formData.personal.fullName || 'User'} />

      <main className="profile-main">
        {successMessage && (
          <div className="profile-toast-success">{successMessage}</div>
        )}

        <ProfileHeader
          personal={formData.personal}
          onEditPhoto={handleEditPhoto}
        />

        <form onSubmit={handleSaveProfile} noValidate>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <PersonalInfoForm
              personal={formData.personal}
              onChange={handlePersonalChange}
              errors={validationErrors}
            />

            <FitnessInfoForm
              fitness={formData.fitness}
              onChange={handleFitnessChange}
              errors={validationErrors}
            />

            <ProfileStats stats={stats} />

            <div className="profile-actions-row">
              <Button
                type="button"
                variant="text"
                className="profile-btn-reset"
                onClick={handleResetProfile}
                disabled={saving}
              >
                Reset
              </Button>
              <Button
                type="submit"
                variant="primary"
                className="profile-btn-save"
                disabled={saving}
              >
                {saving ? 'Saving...' : 'Save Changes'}
              </Button>
            </div>
          </div>
        </form>
      </main>

      <BottomNavigation />
    </div>
  );
}

export default Profile;

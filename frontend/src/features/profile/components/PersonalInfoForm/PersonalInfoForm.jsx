import React from 'react';
import Card from '../../../../components/common/Card';
import './PersonalInfoForm.css';

function PersonalInfoForm({ personal = {}, onChange, errors = {} }) {
  return (
    <Card className="profile-form-card">
      <h3 className="profile-form-title">Personal Information</h3>

      <div className="profile-form-grid">
        {/* Full Name */}
        <div className="profile-field-group">
          <label className="profile-field-label" htmlFor="fullName">
            Full Name
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            className={`profile-field-input ${errors.fullName ? 'has-error' : ''}`}
            value={personal.fullName || ''}
            onChange={onChange}
            required
          />
          {errors.fullName && (
            <span className="profile-field-error">{errors.fullName}</span>
          )}
        </div>

        {/* Email */}
        <div className="profile-field-group">
          <label className="profile-field-label" htmlFor="email">
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className={`profile-field-input ${errors.email ? 'has-error' : ''}`}
            value={personal.email || ''}
            onChange={onChange}
            required
          />
          {errors.email && (
            <span className="profile-field-error">{errors.email}</span>
          )}
        </div>

        {/* Age & Gender */}
        <div className="profile-form-row">
          <div className="profile-field-group">
            <label className="profile-field-label" htmlFor="age">
              Age
            </label>
            <input
              id="age"
              name="age"
              type="number"
              min="1"
              max="120"
              className={`profile-field-input ${errors.age ? 'has-error' : ''}`}
              value={personal.age || ''}
              onChange={onChange}
              required
            />
            {errors.age && (
              <span className="profile-field-error">{errors.age}</span>
            )}
          </div>

          <div className="profile-field-group">
            <label className="profile-field-label" htmlFor="gender">
              Gender
            </label>
            <select
              id="gender"
              name="gender"
              className="profile-field-select"
              value={personal.gender || 'Male'}
              onChange={onChange}
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
              <option value="Prefer not to say">Prefer not to say</option>
            </select>
          </div>
        </div>

        {/* Height & Weight */}
        <div className="profile-form-row">
          <div className="profile-field-group">
            <label className="profile-field-label" htmlFor="height">
              Height (cm)
            </label>
            <input
              id="height"
              name="height"
              type="number"
              min="1"
              className={`profile-field-input ${errors.height ? 'has-error' : ''}`}
              value={personal.height || ''}
              onChange={onChange}
              required
            />
            {errors.height && (
              <span className="profile-field-error">{errors.height}</span>
            )}
          </div>

          <div className="profile-field-group">
            <label className="profile-field-label" htmlFor="weight">
              Weight (kg)
            </label>
            <input
              id="weight"
              name="weight"
              type="number"
              min="1"
              className={`profile-field-input ${errors.weight ? 'has-error' : ''}`}
              value={personal.weight || ''}
              onChange={onChange}
              required
            />
            {errors.weight && (
              <span className="profile-field-error">{errors.weight}</span>
            )}
          </div>
        </div>
      </div>
    </Card>
  );
}

export default PersonalInfoForm;

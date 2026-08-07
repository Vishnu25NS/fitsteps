import React from 'react';
import Card from '../../../../components/common/Card';
import './FitnessInfoForm.css';

function FitnessInfoForm({ fitness = {}, onChange, errors = {} }) {
  return (
    <Card className="fitness-form-card">
      <h3 className="fitness-form-title">Fitness Preferences & Goals</h3>

      <div className="fitness-form-grid">
        {/* Daily Step Goal & Preferred Activity */}
        <div className="profile-form-row">
          <div className="profile-field-group">
            <label className="profile-field-label" htmlFor="dailyStepGoal">
              Daily Step Goal
            </label>
            <input
              id="dailyStepGoal"
              name="dailyStepGoal"
              type="number"
              min="1000"
              step="500"
              className={`profile-field-input ${errors.dailyStepGoal ? 'has-error' : ''}`}
              value={fitness.dailyStepGoal || 10000}
              onChange={onChange}
              required
            />
            {errors.dailyStepGoal && (
              <span className="profile-field-error">{errors.dailyStepGoal}</span>
            )}
          </div>

          <div className="profile-field-group">
            <label className="profile-field-label" htmlFor="preferredActivity">
              Preferred Activity
            </label>
            <select
              id="preferredActivity"
              name="preferredActivity"
              className="profile-field-select"
              value={fitness.preferredActivity || 'Walking'}
              onChange={onChange}
            >
              <option value="Walking">Walking</option>
              <option value="Running">Running</option>
              <option value="Cycling">Cycling</option>
              <option value="Workout">Workout</option>
              <option value="Swimming">Swimming</option>
              <option value="Yoga">Yoga</option>
            </select>
          </div>
        </div>

        {/* Weekly Target & Activity Level */}
        <div className="profile-form-row">
          <div className="profile-field-group">
            <label className="profile-field-label" htmlFor="weeklyTarget">
              Weekly Target
            </label>
            <input
              id="weeklyTarget"
              name="weeklyTarget"
              type="text"
              className="profile-field-input"
              value={fitness.weeklyTarget || ''}
              onChange={onChange}
              placeholder="e.g. 5 Workouts / week"
            />
          </div>

          <div className="profile-field-group">
            <label className="profile-field-label" htmlFor="activityLevel">
              Activity Level
            </label>
            <select
              id="activityLevel"
              name="activityLevel"
              className="profile-field-select"
              value={fitness.activityLevel || 'Moderately Active'}
              onChange={onChange}
            >
              <option value="Sedentary">Sedentary</option>
              <option value="Lightly Active">Lightly Active</option>
              <option value="Moderately Active">Moderately Active</option>
              <option value="Very Active">Very Active</option>
            </select>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default FitnessInfoForm;

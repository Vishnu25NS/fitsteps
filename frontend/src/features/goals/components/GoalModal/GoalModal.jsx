import React, { useState, useEffect } from 'react';
import Modal from '../../../../components/common/Modal';
import Button from '../../../../components/common/Button';
import './GoalModal.css';

const GOAL_TYPE_UNITS = {
  'Daily Steps': 'steps',
  'Active Minutes': 'mins',
  Distance: 'km',
  Calories: 'kcal',
};

function GoalModal({ isOpen, onClose, onSave, initialData = null }) {
  const [formData, setFormData] = useState({
    title: '',
    activityType: 'Walking',
    goalType: 'Daily Steps',
    targetValue: 10000,
    frequency: 'Daily',
    startDate: new Date().toISOString().split('T')[0],
  });

  useEffect(() => {
    if (initialData) {
      setFormData({
        title: initialData.title || '',
        activityType: initialData.activityType || 'Walking',
        goalType: initialData.goalType || 'Daily Steps',
        targetValue: initialData.targetValue || 10000,
        frequency: initialData.frequency || 'Daily',
        startDate: initialData.startDate || new Date().toISOString().split('T')[0],
      });
    } else {
      setFormData({
        title: '',
        activityType: 'Walking',
        goalType: 'Daily Steps',
        targetValue: 10000,
        frequency: 'Daily',
        startDate: new Date().toISOString().split('T')[0],
      });
    }
  }, [initialData, isOpen]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === 'targetValue' ? Number(value) : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title.trim()) return;

    const unit = GOAL_TYPE_UNITS[formData.goalType] || 'units';
    onSave({
      ...formData,
      unit,
    });
  };

  const isEditing = Boolean(initialData);

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={isEditing ? 'Edit Goal' : 'Create New Goal'}
    >
      <form className="goal-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label" htmlFor="goal-title">
            Goal Title
          </label>
          <input
            id="goal-title"
            name="title"
            type="text"
            className="form-input"
            placeholder="e.g. Daily Step Champion"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label className="form-label" htmlFor="activity-type">
              Activity Type
            </label>
            <select
              id="activity-type"
              name="activityType"
              className="form-select"
              value={formData.activityType}
              onChange={handleChange}
            >
              <option value="Walking">Walking</option>
              <option value="Running">Running</option>
              <option value="Cycling">Cycling</option>
              <option value="Workout">Workout</option>
            </select>
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="goal-type">
              Goal Type
            </label>
            <select
              id="goal-type"
              name="goalType"
              className="form-select"
              value={formData.goalType}
              onChange={handleChange}
            >
              <option value="Daily Steps">Daily Steps</option>
              <option value="Active Minutes">Active Minutes</option>
              <option value="Distance">Distance</option>
              <option value="Calories">Calories</option>
            </select>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label className="form-label" htmlFor="target-value">
              Target Value
            </label>
            <input
              id="target-value"
              name="targetValue"
              type="number"
              min="1"
              step="any"
              className="form-input"
              value={formData.targetValue}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="frequency">
              Frequency
            </label>
            <select
              id="frequency"
              name="frequency"
              className="form-select"
              value={formData.frequency}
              onChange={handleChange}
            >
              <option value="Daily">Daily</option>
              <option value="Weekly">Weekly</option>
            </select>
          </div>
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="start-date">
            Start Date
          </label>
          <input
            id="start-date"
            name="startDate"
            type="date"
            className="form-input"
            value={formData.startDate}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-actions">
          <Button
            type="button"
            variant="text"
            className="modal-btn-cancel"
            onClick={onClose}
          >
            Cancel
          </Button>
          <Button type="submit" variant="primary" className="modal-btn-submit">
            {isEditing ? 'Save Changes' : 'Create Goal'}
          </Button>
        </div>
      </form>
    </Modal>
  );
}

export default GoalModal;

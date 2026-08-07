import React, { useState, useEffect } from 'react';
import Modal from '../../../../components/common/Modal';
import Button from '../../../../components/common/Button';
import './ActivityModal.css';

function ActivityModal({ isOpen, onClose, onSave, initialData = null }) {
  const getNowISO = () => {
    const now = new Date();
    return new Date(now.getTime() - now.getTimezoneOffset() * 60000)
      .toISOString()
      .slice(0, 16);
  };

  const [formData, setFormData] = useState({
    title: '',
    category: 'Walking',
    duration: 30,
    distance: 2.5,
    calories: 200,
    notes: '',
    dateTime: getNowISO(),
  });

  useEffect(() => {
    if (initialData) {
      setFormData({
        title: initialData.title || '',
        category: initialData.category || 'Walking',
        duration: initialData.duration || 30,
        distance: initialData.distance || 0,
        calories: initialData.calories || 0,
        notes: initialData.notes || '',
        dateTime: initialData.dateTime || getNowISO(),
      });
    } else {
      setFormData({
        title: '',
        category: 'Walking',
        duration: 30,
        distance: 2.5,
        calories: 200,
        notes: '',
        dateTime: getNowISO(),
      });
    }
  }, [initialData, isOpen]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        name === 'duration' || name === 'calories' || name === 'distance'
          ? Number(value)
          : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title.trim()) return;

    onSave(formData);
  };

  const isEditing = Boolean(initialData);

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={isEditing ? 'Edit Activity' : 'Quick Add Activity'}
    >
      <form className="activity-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label" htmlFor="activity-title">
            Activity Name
          </label>
          <input
            id="activity-title"
            name="title"
            type="text"
            className="form-input"
            placeholder="e.g. Morning Walk"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="activity-category">
            Category
          </label>
          <select
            id="activity-category"
            name="category"
            className="form-select"
            value={formData.category}
            onChange={handleChange}
          >
            <option value="Walking">Walking</option>
            <option value="Running">Running</option>
            <option value="Cycling">Cycling</option>
            <option value="Workout">Workout</option>
            <option value="Swimming">Swimming</option>
            <option value="Yoga">Yoga</option>
            <option value="Hiking">Hiking</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label className="form-label" htmlFor="activity-duration">
              Duration (mins)
            </label>
            <input
              id="activity-duration"
              name="duration"
              type="number"
              min="1"
              className="form-input"
              value={formData.duration}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="activity-distance">
              Distance (km)
            </label>
            <input
              id="activity-distance"
              name="distance"
              type="number"
              min="0"
              step="0.1"
              className="form-input"
              value={formData.distance}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label className="form-label" htmlFor="activity-calories">
              Calories (kcal)
            </label>
            <input
              id="activity-calories"
              name="calories"
              type="number"
              min="0"
              className="form-input"
              value={formData.calories}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="activity-datetime">
              Date & Time
            </label>
            <input
              id="activity-datetime"
              name="dateTime"
              type="datetime-local"
              className="form-input"
              value={formData.dateTime}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="activity-notes">
            How did you feel? (Notes)
          </label>
          <textarea
            id="activity-notes"
            name="notes"
            className="form-textarea"
            placeholder="e.g. Felt great, high energy workout!"
            value={formData.notes}
            onChange={handleChange}
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
            {isEditing ? 'Save Changes' : 'Log Activity'}
          </Button>
        </div>
      </form>
    </Modal>
  );
}

export default ActivityModal;

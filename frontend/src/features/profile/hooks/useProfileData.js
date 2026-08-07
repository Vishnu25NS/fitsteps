import { useState, useEffect, useCallback } from 'react';
import { fetchProfile, updateProfile } from '../services/profileService';

export function useProfileData() {
  const [originalProfile, setOriginalProfile] = useState(null);
  const [formData, setFormData] = useState({
    personal: {
      fullName: '',
      email: '',
      avatarUrl: '',
      age: 25,
      gender: 'Male',
      height: 175,
      weight: 70,
    },
    fitness: {
      dailyStepGoal: 10000,
      preferredActivity: 'Walking',
      weeklyTarget: '5 Workouts / week',
      activityLevel: 'Moderately Active',
    },
  });
  const [stats, setStats] = useState({
    currentStreak: 0,
    totalActivities: 0,
    totalSteps: 0,
    goalsCompleted: 0,
  });

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [validationErrors, setValidationErrors] = useState({});

  const loadProfile = useCallback(async () => {
    try {
      setLoading(true);
      const res = await fetchProfile();
      setOriginalProfile(res);
      setFormData({
        personal: res.personal,
        fitness: res.fitness,
      });
      setStats(res.stats);
      setError(null);
    } catch (err) {
      setError('Failed to fetch profile information.');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadProfile();
  }, [loadProfile]);

  const handlePersonalChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      personal: {
        ...prev.personal,
        [name]: name === 'age' || name === 'height' || name === 'weight' ? Number(value) : value,
      },
    }));
    setSuccessMessage(null);
  };

  const handleFitnessChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      fitness: {
        ...prev.fitness,
        [name]: name === 'dailyStepGoal' ? Number(value) : value,
      },
    }));
    setSuccessMessage(null);
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.personal.fullName.trim()) {
      errors.fullName = 'Full Name is required.';
    }
    if (!formData.personal.email.trim() || !formData.personal.email.includes('@')) {
      errors.email = 'Valid Email address is required.';
    }
    if (formData.personal.age <= 0 || formData.personal.age > 120) {
      errors.age = 'Age must be between 1 and 120.';
    }
    if (formData.personal.height <= 0) {
      errors.height = 'Height must be a positive number.';
    }
    if (formData.personal.weight <= 0) {
      errors.weight = 'Weight must be a positive number.';
    }
    if (formData.fitness.dailyStepGoal <= 0) {
      errors.dailyStepGoal = 'Step Goal must be greater than 0.';
    }

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSaveProfile = async (e) => {
    if (e) e.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      setSaving(true);
      const updated = await updateProfile(formData);
      setOriginalProfile(updated);
      setFormData({
        personal: updated.personal,
        fitness: updated.fitness,
      });
      setSuccessMessage('Profile updated successfully!');
      setTimeout(() => setSuccessMessage(null), 3000);
    } catch (err) {
      setError('Failed to update profile.');
    } finally {
      setSaving(false);
    }
  };

  const handleResetProfile = () => {
    if (originalProfile) {
      setFormData({
        personal: originalProfile.personal,
        fitness: originalProfile.fitness,
      });
      setValidationErrors({});
      setSuccessMessage(null);
    }
  };

  return {
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
  };
}

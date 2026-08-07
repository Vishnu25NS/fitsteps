import { useState, useEffect, useCallback } from 'react';
import { fetchSettings, updatePreference } from '../services/settingsService';

export function useSettingsData() {
  const [settings, setSettings] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadSettings = useCallback(async () => {
    try {
      setLoading(true);
      const res = await fetchSettings();
      setSettings(res);
      setError(null);
    } catch (err) {
      setError('Failed to fetch settings.');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadSettings();
  }, [loadSettings]);

  const handleTogglePreference = async (key, value) => {
    // Optimistic UI update
    setSettings((prev) => ({
      ...prev,
      preferences: {
        ...prev.preferences,
        [key]: value,
      },
    }));

    try {
      await updatePreference(key, value);
    } catch (err) {
      console.error('Error updating preference:', err);
      // Rollback on error
      loadSettings();
    }
  };

  return {
    settings,
    loading,
    error,
    handleTogglePreference,
  };
}

import { useState, useEffect, useCallback } from 'react';
import { fetchAnalyticsData } from '../services/analyticsService';

export function useAnalyticsData() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [timeframe, setTimeframe] = useState('week'); // 'week' | 'month'

  const loadData = useCallback(async () => {
    try {
      setLoading(true);
      const res = await fetchAnalyticsData();
      setData(res);
      setError(null);
    } catch (err) {
      setError('Failed to fetch analytics data.');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadData();
  }, [loadData]);

  return {
    data,
    loading,
    error,
    timeframe,
    setTimeframe,
  };
}

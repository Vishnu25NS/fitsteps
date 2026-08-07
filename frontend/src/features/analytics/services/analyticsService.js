// analyticsService.js - Service layer for Analytics feature

const MOCK_ANALYTICS_DATA = {
  metrics: {
    weeklyAverageSteps: 8750,
    goalCompletionRate: 84,
    currentStreak: 5,
    longestStreak: 14,
    bestDay: 'Wednesday (11,420 steps)',
    totalCalories: 14850,
    totalActiveMinutes: 620,
  },
  weeklySteps: [
    { day: 'Mon', steps: 7200, target: 10000 },
    { day: 'Tue', steps: 8500, target: 10000 },
    { day: 'Wed', steps: 11420, target: 10000 },
    { day: 'Thu', steps: 9100, target: 10000 },
    { day: 'Fri', steps: 6800, target: 10000 },
    { day: 'Sat', steps: 10250, target: 10000 },
    { day: 'Sun', steps: 7980, target: 10000 },
  ],
  activityDistribution: [
    { name: 'Walking', value: 35, color: '#0058be' },
    { name: 'Running', value: 25, color: '#004395' },
    { name: 'Cycling', value: 20, color: '#006c49' },
    { name: 'Swimming', value: 10, color: '#6cf8bb' },
    { name: 'Yoga', value: 10, color: '#ffddb8' },
  ],
  goalCompletionTrend: [
    { week: 'Wk 1', rate: 70 },
    { week: 'Wk 2', rate: 75 },
    { week: 'Wk 3', rate: 82 },
    { week: 'Wk 4', rate: 88 },
  ],
};

export async function fetchAnalyticsData() {
  return Promise.resolve(MOCK_ANALYTICS_DATA);
}

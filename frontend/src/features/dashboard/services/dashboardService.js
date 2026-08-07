// dashboardService.js - Service layer for dashboard data

const MOCK_DASHBOARD_DATA = {
  user: {
    userName: "Alex",
    greeting: "Good morning,",
    avatarUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBezgp-oWn4jM6fOTlk6AZx7sEx8V8cXIlA5n8TLRI_KZzAfbYgL6qwkwzvsThD4HGk8Qv0TTmvF38gLzt3ukvkHZ_P0oVv3KrvBkUUOPaNA0xGyWs5Fh9aYo74lupKC2nY0Cau3341KmnvhrJ_ncceaj-Zx2EJabidUDPnQjFM-kAVOzK71O6cl3Utf3gtP_L9zklfVanfpB-J2XHE3JHfWMkWXuJTDWrl4wwnLa5dJT3aw_nFSMyN5g",
    hasUnreadNotifications: true,
  },
  progress: {
    currentSteps: 8432,
    goalSteps: 10000,
    calories: 1200,
    activeMinutes: 45,
  },
  weeklySummary: [
    { day: 'Mon', heightPercent: 40, isPeak: false },
    { day: 'Tue', heightPercent: 60, isPeak: false },
    { day: 'Wed', heightPercent: 85, isPeak: true },
    { day: 'Thu', heightPercent: 50, isPeak: false },
    { day: 'Fri', heightPercent: 30, isPeak: false },
    { day: 'Sat', heightPercent: 70, isPeak: false },
    { day: 'Sun', heightPercent: 45, isPeak: false },
  ],
  recentActivities: [
    {
      id: '1',
      title: 'Morning Walk',
      meta: '30 min • 2.5 km',
      calories: '320 kcal',
      time: '8:30 AM',
      type: 'walk',
    },
    {
      id: '2',
      title: 'Cycling',
      meta: '20 min • 5.0 km',
      calories: '210 kcal',
      time: 'Yesterday',
      type: 'bike',
    },
    {
      id: '3',
      title: 'Swimming',
      meta: '45 min • 1.2 km',
      calories: '450 kcal',
      time: 'Mon',
      type: 'swim',
    },
  ],
};

export async function fetchDashboardData() {
  return Promise.resolve(MOCK_DASHBOARD_DATA);
}

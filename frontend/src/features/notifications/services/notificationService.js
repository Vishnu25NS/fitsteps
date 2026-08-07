// notificationService.js - Service layer for Notifications feature

let mockNotifications = [
  {
    id: 'notif-1',
    type: 'goal_achieved',
    title: '🏆 Goal Achieved!',
    description: 'Congratulations! You completed your Daily 10k Steps goal.',
    timestamp: '10 mins ago',
    isRead: false,
  },
  {
    id: 'notif-2',
    type: 'streak_reminder',
    title: '🔥 Keep Your Streak Alive!',
    description: 'You are on a 5-day streak! Log 1,568 more steps today to maintain it.',
    timestamp: '2 hours ago',
    isRead: false,
  },
  {
    id: 'notif-3',
    type: 'activity_reminder',
    title: '🚶 Time for a Walk',
    description: 'You have been sitting for 2 hours. Take a 10-minute walk to stay active.',
    timestamp: '5 hours ago',
    isRead: false,
  },
  {
    id: 'notif-4',
    type: 'weekly_summary',
    title: '📊 Weekly Summary Ready',
    description: 'Your weekly performance report is ready. You burned 14,850 kcal this week!',
    timestamp: 'Yesterday',
    isRead: true,
  },
  {
    id: 'notif-5',
    type: 'ai_recommendation',
    title: '💪 AI Coach Tip',
    description: 'Based on your recent swimming sessions, adding 15 mins of yoga will boost recovery.',
    timestamp: '2 days ago',
    isRead: true,
  },
  {
    id: 'notif-6',
    type: 'badge_earned',
    title: '🎉 New Badge Unlocked!',
    description: 'You earned the "Weekend Warrior" badge for completing 3 workouts this weekend.',
    timestamp: '3 days ago',
    isRead: true,
  },
];

export async function fetchNotifications() {
  return Promise.resolve([...mockNotifications]);
}

export async function markAsRead(id) {
  mockNotifications = mockNotifications.map((n) =>
    n.id === id ? { ...n, isRead: true } : n
  );
  return Promise.resolve([...mockNotifications]);
}

export async function markAllAsRead() {
  mockNotifications = mockNotifications.map((n) => ({ ...n, isRead: true }));
  return Promise.resolve([...mockNotifications]);
}

export async function deleteNotification(id) {
  mockNotifications = mockNotifications.filter((n) => n.id !== id);
  return Promise.resolve([...mockNotifications]);
}

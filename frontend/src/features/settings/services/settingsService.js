// settingsService.js - Service layer for Settings feature

let mockSettings = {
  profile: {
    userName: "Alex Johnson",
    email: "alex.johnson@fitsteps.app",
    avatarUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBezgp-oWn4jM6fOTlk6AZx7sEx8V8cXIlA5n8TLRI_KZzAfbYgL6qwkwzvsThD4HGk8Qv0TTmvF38gLzt3ukvkHZ_P0oVv3KrvBkUUOPaNA0xGyWs5Fh9aYo74lupKC2nY0Cau3341KmnvhrJ_ncceaj-Zx2EJabidUDPnQjFM-kAVOzK71O6cl3Utf3gtP_L9zklfVanfpB-J2XHE3JHfWMkWXuJTDWrl4wwnLa5dJT3aw_nFSMyN5g",
  },
  preferences: {
    notifications: true,
    darkMode: false,
    dailyGoalReminder: true,
    units: "Metric",
  },
  about: {
    appVersion: "1.2.0 (Build 48)",
    privacyPolicyUrl: "#",
    termsUrl: "#",
    contactEmail: "support@fitsteps.app",
  },
};

export async function fetchSettings() {
  return Promise.resolve({ ...mockSettings });
}

export async function updatePreference(key, value) {
  mockSettings.preferences = {
    ...mockSettings.preferences,
    [key]: value,
  };
  return Promise.resolve({ ...mockSettings.preferences });
}

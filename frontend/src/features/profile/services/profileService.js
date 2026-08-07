// profileService.js - Service layer for User Profile feature

let mockProfileData = {
  personal: {
    fullName: "Alex Johnson",
    email: "alex.johnson@fitsteps.app",
    avatarUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBezgp-oWn4jM6fOTlk6AZx7sEx8V8cXIlA5n8TLRI_KZzAfbYgL6qwkwzvsThD4HGk8Qv0TTmvF38gLzt3ukvkHZ_P0oVv3KrvBkUUOPaNA0xGyWs5Fh9aYo74lupKC2nY0Cau3341KmnvhrJ_ncceaj-Zx2EJabidUDPnQjFM-kAVOzK71O6cl3Utf3gtP_L9zklfVanfpB-J2XHE3JHfWMkWXuJTDWrl4wwnLa5dJT3aw_nFSMyN5g",
    age: 28,
    gender: "Male",
    height: 178,
    weight: 72,
  },
  fitness: {
    dailyStepGoal: 10000,
    preferredActivity: "Walking",
    weeklyTarget: "5 Workouts / week",
    activityLevel: "Moderately Active",
  },
  stats: {
    currentStreak: 5,
    totalActivities: 28,
    totalSteps: 248500,
    goalsCompleted: 12,
  },
};

export async function fetchProfile() {
  return Promise.resolve(JSON.parse(JSON.stringify(mockProfileData)));
}

export async function updateProfile(updatedData) {
  mockProfileData = {
    ...mockProfileData,
    personal: { ...mockProfileData.personal, ...updatedData.personal },
    fitness: { ...mockProfileData.fitness, ...updatedData.fitness },
  };
  return Promise.resolve(JSON.parse(JSON.stringify(mockProfileData)));
}

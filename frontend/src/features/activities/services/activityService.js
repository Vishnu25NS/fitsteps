// activityService.js - Service layer for Activities feature

let mockActivities = [
  {
    id: 'act-1',
    title: 'Morning Walk',
    category: 'Walking',
    duration: 30,
    distance: 2.5,
    calories: 320,
    notes: 'Felt energetic and refreshed!',
    dateTime: '2026-08-07T08:30',
  },
  {
    id: 'act-2',
    title: 'Coastal Cycling',
    category: 'Cycling',
    duration: 45,
    distance: 12.0,
    calories: 410,
    notes: 'Breezy ride along the coast.',
    dateTime: '2026-08-06T17:15',
  },
  {
    id: 'act-3',
    title: 'Evening Swim Laps',
    category: 'Swimming',
    duration: 40,
    distance: 1.2,
    calories: 450,
    notes: 'Great workout, completed 30 laps.',
    dateTime: '2026-08-05T19:00',
  },
  {
    id: 'act-4',
    title: 'Sunset Yoga Flow',
    category: 'Yoga',
    duration: 35,
    distance: 0,
    calories: 180,
    notes: 'Relaxing stretch and core stability.',
    dateTime: '2026-08-04T18:30',
  },
];

export async function fetchActivities() {
  return Promise.resolve([...mockActivities]);
}

export async function createActivity(activityData) {
  const newActivity = {
    id: `act-${Date.now()}`,
    ...activityData,
  };
  mockActivities = [newActivity, ...mockActivities];
  return Promise.resolve(newActivity);
}

export async function updateActivity(id, updatedFields) {
  mockActivities = mockActivities.map((act) =>
    act.id === id ? { ...act, ...updatedFields } : act
  );
  const updated = mockActivities.find((act) => act.id === id);
  return Promise.resolve(updated);
}

export async function deleteActivity(id) {
  mockActivities = mockActivities.filter((act) => act.id !== id);
  return Promise.resolve({ success: true, id });
}

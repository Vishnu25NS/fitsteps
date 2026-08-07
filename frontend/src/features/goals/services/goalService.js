// goalService.js - Service layer for Goals feature

let mockGoals = [
  {
    id: 'goal-1',
    title: 'Daily Step Champion',
    activityType: 'Walking',
    goalType: 'Daily Steps',
    targetValue: 10000,
    currentProgress: 8432,
    unit: 'steps',
    frequency: 'Daily',
    startDate: '2026-08-01',
    status: 'Active',
  },
  {
    id: 'goal-2',
    title: 'Morning Run Routine',
    activityType: 'Running',
    goalType: 'Distance',
    targetValue: 5.0,
    currentProgress: 5.0,
    unit: 'km',
    frequency: 'Daily',
    startDate: '2026-08-03',
    status: 'Completed',
  },
  {
    id: 'goal-3',
    title: 'Active Fitness Burn',
    activityType: 'Workout',
    goalType: 'Calories',
    targetValue: 500,
    currentProgress: 350,
    unit: 'kcal',
    frequency: 'Daily',
    startDate: '2026-08-05',
    status: 'Active',
  },
  {
    id: 'goal-4',
    title: 'Weekly Cycling Streak',
    activityType: 'Cycling',
    goalType: 'Active Minutes',
    targetValue: 150,
    currentProgress: 120,
    unit: 'mins',
    frequency: 'Weekly',
    startDate: '2026-08-01',
    status: 'Active',
  },
];

export async function fetchGoals() {
  return Promise.resolve([...mockGoals]);
}

export async function createGoal(goalData) {
  const newGoal = {
    id: `goal-${Date.now()}`,
    currentProgress: 0,
    status: 'Active',
    ...goalData,
  };
  mockGoals = [newGoal, ...mockGoals];
  return Promise.resolve(newGoal);
}

export async function updateGoal(id, updatedFields) {
  mockGoals = mockGoals.map((g) => {
    if (g.id === id) {
      const updated = { ...g, ...updatedFields };
      // Automatically update status if target reached
      if (updated.currentProgress >= updated.targetValue) {
        updated.status = 'Completed';
      }
      return updated;
    }
    return g;
  });
  const updatedGoal = mockGoals.find((g) => g.id === id);
  return Promise.resolve(updatedGoal);
}

export async function deleteGoal(id) {
  mockGoals = mockGoals.filter((g) => g.id !== id);
  return Promise.resolve({ success: true, id });
}

import api from '../../../services/api';

export async function fetchGoals() {
  try {
    const response = await api.get('/goals');
    return response.data;
  } catch (error) {
    console.error('Error fetching goals:', error);
    throw error;
  }
}

export async function createGoal(goalData) {
  try {
    const response = await api.post('/goals', goalData);
    return response.data;
  } catch (error) {
    console.error('Error creating goal:', error);
    throw error;
  }
}

export async function updateGoal(id, updatedFields) {
  try {
    const response = await api.put(`/goals/${id}`, updatedFields);
    return response.data;
  } catch (error) {
    console.error(`Error updating goal ${id}:`, error);
    throw error;
  }
}

export async function deleteGoal(id) {
  try {
    const response = await api.delete(`/goals/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error deleting goal ${id}:`, error);
    throw error;
  }
}

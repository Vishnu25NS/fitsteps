import api from '../../../services/api';

export async function fetchActivities() {
  try {
    const response = await api.get('/activities');
    return response.data;
  } catch (error) {
    console.error('Error fetching activities:', error);
    throw error;
  }
}

export async function createActivity(activityData) {
  try {
    const response = await api.post('/activities', activityData);
    return response.data;
  } catch (error) {
    console.error('Error creating activity:', error);
    throw error;
  }
}

export async function updateActivity(id, updatedFields) {
  try {
    const response = await api.put(`/activities/${id}`, updatedFields);
    return response.data;
  } catch (error) {
    console.error(`Error updating activity ${id}:`, error);
    throw error;
  }
}

export async function deleteActivity(id) {
  try {
    const response = await api.delete(`/activities/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error deleting activity ${id}:`, error);
    throw error;
  }
}

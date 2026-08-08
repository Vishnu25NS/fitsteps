import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:8000',
  timeout: 5000,
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    let status = 0;
    let message = 'Unexpected error';
    let type = 'network';

    if (error.response) {
      type = 'server';
      status = error.response.status;
      const data = error.response.data;

      if (data && typeof data.detail === 'string') {
        message = data.detail;
      } else if (data && typeof data.message === 'string') {
        message = data.message;
      } else if (error.message) {
        message = error.message;
      }
    } else {
      type = 'network';
      status = 0;
      message = 'Network error';
    }

    console.error(`[API ${type.toUpperCase()} Error ${status}]:`, message);

    return Promise.reject({
      status,
      message,
      type,
    });
  }
);

export default api;

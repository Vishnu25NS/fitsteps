import axios from 'axios';

const rawApiUrl = import.meta.env.VITE_API_URL;

if (!rawApiUrl) {
  console.warn('[API Client Warning]: VITE_API_URL environment variable is missing. Falling back to production backend.');
}

const baseURL = (rawApiUrl || 'https://fitsteps-5dzf.onrender.com').replace(/\/+$/, '');

const api = axios.create({
  baseURL,
  timeout: 10000,
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

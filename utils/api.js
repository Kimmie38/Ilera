import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Base URL
const API_BASE_URL = 'https://ilera.onrender.com/api/v1/';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Attach token automatically to requests
api.interceptors.request.use(async (config) => {
  const token = await AsyncStorage.getItem('accessToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Response interceptor to handle token expiration or invalid token
api.interceptors.response.use(
  response => response,
  async error => {
    const originalRequest = error.config;

    if (
      error.response &&
      error.response.status === 401 &&
      error.response.data?.code === 'token_not_valid'
    ) {
      // Token expired or invalid - clear tokens
      await AsyncStorage.removeItem('accessToken');
      await AsyncStorage.removeItem('refresh-Token');

      // Optionally you can redirect user to login screen here, but you
      // would need access to navigation which is tricky here.
      // Instead, you can emit an event or handle this in your screens.

      // Reject error so your screens know what happened
      return Promise.reject(error);
    }

    return Promise.reject(error);
  }
);

export default api;

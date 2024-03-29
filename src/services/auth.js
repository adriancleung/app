import axios from 'axios';
import { API_URL, INVALID_TOKEN, VALID_TOKEN } from '../constants';
import authHeader from '../utils/authHeader';

const login = async (email, password) => {
  const res = await axios.post(`${API_URL}/login`, { email, password });
  if (res.data.accessToken) {
    localStorage.setItem('user', JSON.stringify(res.data));
  }
  return res.data;
};

const verifyToken = async () => {
  try {
    const res = await axios.post(`${API_URL}/verify`, null, {
      headers: authHeader(),
    });
    if (res.data.userId === getCurrentUser().userId) {
      return VALID_TOKEN;
    } else {
      return INVALID_TOKEN;
    }
  } catch (err) {
    return INVALID_TOKEN;
  }
};

const logout = () => {
  localStorage.removeItem('user');
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem('user'));
};

const checkAuth = async () => {
  if (getCurrentUser()) {
    try {
      const value = await verifyToken();
      return value;
    } catch (error) {
      return INVALID_TOKEN;
    }
  } else {
    return INVALID_TOKEN;
  }
};

export { login, verifyToken, logout, getCurrentUser, checkAuth };

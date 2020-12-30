import axios from 'axios';
import { API_URL } from '../constants';
import authHeader from '../utils/authHeader';

export const sendMessage = async (firstName, lastName, email, message) => {
  try {
    const res = await axios.post(`${API_URL}/mail`, {
      firstName: firstName,
      lastName: lastName,
      email: email,
      message: message,
    });
    return res;
  } catch (err) {
    return err;
  }
};

export const getResume = async () => {
  try {
    const res = await axios.get(`${API_URL}/resume`);
    return res;
  } catch (err) {
    return err;
  }
};

export const getAllMail = async () => {
  try {
    const res = await axios.get(`${API_URL}/mail`, { headers: authHeader() });
    return res;
  } catch (err) {
    return err;
  }
};

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

export const submitResume = async (name, file) => {
  const formData = new FormData();
  formData.append('name', name);
  formData.append('file', file);

  try {
    const res = await axios.post(`${API_URL}/resume`, formData, {
      headers: authHeader(),
    });
    return res;
  } catch (err) {
    return err;
  }
};

export const getAllMail = async () => {
  try {
    const res = await axios.get(`${API_URL}/mails`, { headers: authHeader() });
    return res;
  } catch (err) {
    return err;
  }
};

export const getAboutContent = async () => {
  try {
    const res = await axios.get(`${API_URL}/about`);
    return res;
  } catch (err) {
    return err;
  }
};

export const updateAboutContent = async content => {
  try {
    const res = await axios.post(
      `${API_URL}/about`,
      { content: content },
      { headers: authHeader() }
    );
    return res;
  } catch (err) {
    return err;
  }
};

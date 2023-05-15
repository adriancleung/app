import Axios from 'axios';
import { API_URL } from '../constants';
import { MailResponse } from '../types/response';
import authHeader from '../utils/authHeader';

const apiInstance = Axios.create({ baseURL: API_URL });

apiInstance.interceptors.request.use(async config => {
  config.headers = config.headers || {};
  const authorization = authHeader();
  if (authorization) {
    config.headers.authorization = authorization;
  }
  return config;
});

const api = {
  about: {
    get: async (): Promise<string> => {
      return (await apiInstance.get('/about')).data;
    },
    update: async (content: string): Promise<'OK'> => {
      return (await apiInstance.post('/about', { content })).data;
    },
  },
  chat: {
    response: async (content: string): Promise<string> => {
      return (await apiInstance.post('/chat', { content })).data.message;
    },
  },
  mail: {
    get: async (): Promise<MailResponse> => {
      return (await apiInstance.get('/mails')).data;
    },
    send: async (
      firstName: string,
      lastName: string,
      email: string,
      message: string
    ): Promise<'OK'> => {
      return (
        await apiInstance.post('/mails', {
          firstName,
          lastName,
          email,
          message,
        })
      ).data;
    },
  },
  resume: {
    get: async (): Promise<string> => {
      return (await apiInstance.get('/resume')).data;
    },
    update: async (file: File): Promise<'OK'> => {
      const formData = new FormData();
      formData.append('resume', file);
      return (await apiInstance.post('/resume', formData)).data;
    },
  },
};

export default api;

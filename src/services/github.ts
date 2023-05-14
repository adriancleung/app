import Axios from 'axios';
import { GITHUB_API } from '../constants';
import { RepoResponse } from '../types/response';

const githubInstance = Axios.create({ baseURL: GITHUB_API });

githubInstance.interceptors.request.use(async config => {
  config.headers = config.headers || {};
  config.headers.Accept = 'application/vnd.github.v3+json';
  return config;
});

const github = {
  repos: {
    get: async (): Promise<RepoResponse> => {
      return (await githubInstance.get('/users/adriancleung/repos')).data;
    },
  },
};

export default github;

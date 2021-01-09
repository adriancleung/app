import axios from 'axios';
import { GITHUB_API } from '../constants';

export const getRepos = async () => {
  try {
    const res = await axios.get(`${GITHUB_API}/users/adriancleung/repos`, {
      headers: { Accept: 'application/vnd.github.v3+json' },
    });
    return res;
  } catch (err) {
    return err;
  }
};

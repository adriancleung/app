import { getCurrentUser } from '../services/auth';

const authHeader = () => {
  const user = getCurrentUser();

  if (user && user.accessToken) {
    return { authorization: `Bearer ${user.accessToken}` };
  } else {
    return {};
  }
};

export default authHeader;

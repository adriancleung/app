import { getCurrentUser } from '../services/auth';

const authHeader = () => {
  const user = getCurrentUser();

  if (user && user.accessToken) {
    return { 'x-access-token': user.accessToken };
  } else {
    return {};
  }
};

export default authHeader;

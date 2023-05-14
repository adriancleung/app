import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { logout } from '../services/auth';

type Props = {};

const Logout: React.FC<Props> = () => {
  useEffect(() => {
    logout();
  }, []);

  return <Navigate to={'/login'} />;
};

export default Logout;

import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { logout } from '../services/auth';

const Logout = _props => {
  useEffect(() => {
    logout();
  }, []);

  return <Navigate to={'/login'} />;
};

export default Logout;

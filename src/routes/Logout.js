import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { logout } from '../services/auth';

const Logout = _props => {
  useEffect(() => {
    logout();
  }, []);

  return <Redirect to={'/login'} />;
};

export default Logout;

import React, { useEffect, useState } from 'react';
import { Box, Button, Heading } from 'grommet';
import { Logout } from 'grommet-icons';
import { Redirect } from 'react-router-dom';
import { getCurrentUser, verifyToken } from '../services/auth';
import { INVALID_TOKEN } from '../constants';

const Admin = _props => {
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    if (getCurrentUser()) {
      verifyToken().then(value =>
        value === INVALID_TOKEN ? setRedirect(true) : false
      );
    } else {
      setRedirect(true);
    }
  }, []);

  return redirect ? (
    <Redirect to={'/login'} />
  ) : (
    <Box
      width={'100vw'}
      direction={'row'}
      align={'center'}
      justify={'between'}
      pad={'medium'}>
      <Heading>Admin</Heading>
      <Button plain icon={<Logout size={'medium'} />} href={'/logout'} />
    </Box>
  );
};

export default Admin;

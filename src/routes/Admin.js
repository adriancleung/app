import React, { useEffect, useState } from 'react';
import { Box, Heading } from 'grommet';
import { Navigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import Mail from '../components/Admin/Mail';
import AdminSidebar from '../components/Admin/AdminSidebar';
import AdminAccordian from '../components/Admin/AdminAccordian';
import { checkAuth } from '../services/auth';
import { INVALID_TOKEN } from '../constants';
import Resume from '../components/Admin/Resume';
import About from '../components/Admin/About';

const Admin = _props => {
  const [redirect, setRedirect] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 1224 });
  const [option, setOption] = useState('About');

  const Content = () => {
    switch (option) {
      case 'About':
        return <About />;
      case 'Mail':
        return <Mail />;
      case 'Resume':
        return <Resume />;
      case 'Settings':
        return <></>;
      default:
        return <></>;
    }
  };

  useEffect(() => {
    const validate = async () => {
      if ((await checkAuth()) === INVALID_TOKEN) {
        setRedirect(true);
      }
    };
    validate();
  }, []);

  return redirect ? (
    <Navigate to={'/login'} />
  ) : (
    <Box
      width={'100vw'}
      height={'100vh'}
      gap={isMobile ? 'medium' : 'small'}
      direction={isMobile ? 'column' : 'row'}>
      {isMobile ? (
        <AdminAccordian option={value => setOption(value)} />
      ) : (
        <AdminSidebar option={value => setOption(value)} />
      )}

      <Box
        width={'100%'}
        height={'100%'}
        pad={'small'}
        margin={{ top: isMobile ? '50px' : null }}>
        <Heading margin={'small'}>{option}</Heading>
        <Content />
      </Box>
    </Box>
  );
};

export default Admin;

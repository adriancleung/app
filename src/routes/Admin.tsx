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
import { AdminMenuOption } from '../types/admin';

type Props = {};

const Admin: React.FC<Props> = () => {
  const [redirect, setRedirect] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 1224 });
  const [option, setOption] = useState<AdminMenuOption>(AdminMenuOption.ABOUT);

  const Content = () => {
    switch (option) {
      case AdminMenuOption.ABOUT:
        return <About />;
      case AdminMenuOption.MAIL:
        return <Mail />;
      case AdminMenuOption.RESUME:
        return <Resume />;
      case AdminMenuOption.SETTINGS:
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
        <AdminAccordian option={(value: AdminMenuOption) => setOption(value)} />
      ) : (
        <AdminSidebar option={(value: AdminMenuOption) => setOption(value)} />
      )}

      <Box
        width={'100%'}
        height={'100%'}
        pad={'small'}
        margin={{ top: isMobile ? '50px' : undefined }}>
        <Heading margin={'small'}>{option}</Heading>
        <Content />
      </Box>
    </Box>
  );
};

export default Admin;

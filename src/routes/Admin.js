import React, { useEffect, useState } from 'react';
import { Box, Heading } from 'grommet';
import { Redirect } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import Mail from '../components/Admin/Mail';
import AdminSidebar from '../components/Admin/AdminSidebar';
import AdminAccordian from '../components/Admin/AdminAccordian';
import { checkAuth } from '../services/auth';
import { getAllMail } from '../services/api';
import { INVALID_TOKEN } from '../constants';

const Admin = _props => {
  const [redirect, setRedirect] = useState(false);
  const [mail, setMail] = useState([]);
  const [mailLoading, setMailLoading] = useState(true);
  const isMobile = useMediaQuery({ maxWidth: 1224 });

  const loadMail = () => {
    getAllMail()
      .then(res => {
        const mails = [];
        res.data.mail.forEach(mail => {
          mails.push({
            name: `${mail.firstName} ${mail.lastName}`,
            email: mail.email,
            message: mail.message,
          });
        });
        setMail(mails);
      })
      .catch(err => console.error(err))
      .finally(() => setMailLoading(false));
  };

  useEffect(() => {
    if (checkAuth() === INVALID_TOKEN) {
      setRedirect(true);
    } else {
      loadMail();
    }
  }, []);

  return redirect ? (
    <Redirect to={'/login'} />
  ) : (
    <Box
      width={'100vw'}
      height={'100vh'}
      gap={isMobile ? 'medium' : 'small'}
      direction={isMobile ? 'column' : 'row'}>
      {isMobile ? <AdminAccordian /> : <AdminSidebar />}

      <Box
        width={'100%'}
        height={'100%'}
        pad={'small'}
        margin={{ top: isMobile ? '50px' : null }}>
        <Heading margin={'small'}>Mail</Heading>
        {!mailLoading && <Mail data={mail} />}
      </Box>
    </Box>
  );
};

export default Admin;

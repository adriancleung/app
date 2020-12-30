import React, { useEffect, useState } from 'react';
import {
  Box,
  Button,
  Heading,
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from 'grommet';
import { Logout } from 'grommet-icons';
import { Redirect } from 'react-router-dom';
import { getCurrentUser, verifyToken } from '../services/auth';
import { getAllMail } from '../services/api';
import { INVALID_TOKEN } from '../constants';

const MailMessage = ({ name, email, message }) => {
  return (
    <TableRow>
      <TableCell scope={'col'} border={'bottom'}>
        {name}
      </TableCell>
      <TableCell scope={'col'} border={'bottom'}>
        {email}
      </TableCell>
      <TableCell scope={'col'} border={'bottom'}>
        {message}
      </TableCell>
    </TableRow>
  );
};

const Mail = ({ data }) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableCell scope={'col'} border={'bottom'}>
            <strong>Name</strong>
          </TableCell>
          <TableCell scope={'col'} border={'bottom'}>
            <strong>Email</strong>
          </TableCell>
          <TableCell scope={'col'} border={'bottom'}>
            <strong>Message</strong>
          </TableCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((value, index) => {
          return (
            <MailMessage
              key={index}
              name={value.name}
              email={value.email}
              message={value.message}
            />
          );
        })}
      </TableBody>
    </Table>
  );
};

const Admin = _props => {
  const [redirect, setRedirect] = useState(false);
  const [mail, setMail] = useState([]);
  const [mailLoading, setMailLoading] = useState(true);

  const loadMail = () => {
    getAllMail().then(res => {
      const mails = [];
      res.data.mail.forEach(mail => {
        mails.push({
          name: `${mail.firstName} ${mail.lastName}`,
          email: mail.email,
          message: mail.message,
        });
      });
      setMail(mails);
      setMailLoading(false);
    });
  };

  useEffect(() => {
    if (getCurrentUser()) {
      verifyToken().then(value => {
        if (value === INVALID_TOKEN) {
          setRedirect(true);
        } else {
          loadMail();
        }
      });
    } else {
      setRedirect(true);
    }
  }, []);

  return redirect ? (
    <Redirect to={'/login'} />
  ) : (
    <Box>
      <Box
        width={'100vw'}
        direction={'row'}
        align={'center'}
        justify={'between'}
        pad={'medium'}>
        <Heading>Admin</Heading>
        <Button plain icon={<Logout size={'medium'} />} href={'/logout'} />
      </Box>
      {!mailLoading && <Mail data={mail} />}
    </Box>
  );
};

export default Admin;

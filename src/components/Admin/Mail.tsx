import React, { useEffect, useState } from 'react';
import { Table, TableHeader, TableBody, TableRow, TableCell } from 'grommet';
import { useMediaQuery } from 'react-responsive';
import api from '../../services/api';
import { Mail } from '../../types/mail';

type MailMessageProps = Mail;
type MailProps = {};

const MailMessage: React.FC<MailMessageProps> = ({
  firstName,
  lastName,
  email,
  message,
}) => {
  const isMobile = useMediaQuery({ maxWidth: 1224 });
  const name = `${firstName} ${lastName}`;
  return (
    <TableRow>
      {isMobile ? (
        <TableCell scope={'col'} border={'bottom'}>
          {name} &lt;{email}&gt;
          <br />
          <br />
          {message}
        </TableCell>
      ) : (
        <>
          <TableCell scope={'col'} border={'bottom'}>
            {name}
          </TableCell>
          <TableCell scope={'col'} border={'bottom'}>
            {email}
          </TableCell>
          <TableCell scope={'col'} border={'bottom'}>
            {message}
          </TableCell>
        </>
      )}
    </TableRow>
  );
};

const Mails: React.FC<MailProps> = () => {
  const isMobile = useMediaQuery({ maxWidth: 1224 });
  const [mail, setMail] = useState<Mail[]>([]);
  const [mailLoading, setMailLoading] = useState(true);

  const loadMail = async () => {
    try {
      const response = await api.mail.get();
      setMail(response.mails);
    } catch (err) {
      console.error(err);
    } finally {
      setMailLoading(false);
    }
  };

  useEffect(() => {
    loadMail();
  }, []);

  return !mailLoading ? (
    <Table>
      <TableHeader>
        <TableRow>
          {isMobile ? (
            <TableCell scope={'col'} border={'bottom'}>
              <strong>Messages</strong>
            </TableCell>
          ) : (
            <>
              <TableCell scope={'col'} border={'bottom'}>
                <strong>Name</strong>
              </TableCell>
              <TableCell scope={'col'} border={'bottom'}>
                <strong>Email</strong>
              </TableCell>
              <TableCell scope={'col'} border={'bottom'}>
                <strong>Message</strong>
              </TableCell>
            </>
          )}
        </TableRow>
      </TableHeader>
      <TableBody>
        {mail.map((value, index) => {
          return <MailMessage key={index} {...value} />;
        })}
      </TableBody>
    </Table>
  ) : null;
};

export default Mails;

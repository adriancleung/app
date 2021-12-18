import React, { useEffect, useState } from 'react';
import { Table, TableHeader, TableBody, TableRow, TableCell } from 'grommet';
import { useMediaQuery } from 'react-responsive';
import { getAllMail } from '../../services/api';

const MailMessage = ({ name, email, message }) => {
  const isMobile = useMediaQuery({ maxWidth: 1224 });
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

const Mail = () => {
  const isMobile = useMediaQuery({ maxWidth: 1224 });
  const [mail, setMail] = useState([]);
  const [mailLoading, setMailLoading] = useState(true);

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
    loadMail();
  }, []);

  return (
    !mailLoading && (
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
    )
  );
};

export default Mail;

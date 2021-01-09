import React from 'react';
import { Table, TableHeader, TableBody, TableRow, TableCell } from 'grommet';
import { useMediaQuery } from 'react-responsive';

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

const Mail = ({ data }) => {
  const isMobile = useMediaQuery({ maxWidth: 1224 });
  return (
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

export default Mail;

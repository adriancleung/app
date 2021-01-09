import React from 'react';
import { Sidebar, Box, Avatar, Text, Button, Nav } from 'grommet';
import { User, Logout, MailOption, SettingsOption } from 'grommet-icons';

const AdminSidebar = _props => {
  return (
    <Sidebar
      responsive={false}
      width={'300px'}
      round={{ corner: 'right', size: 'small' }}
      background={'#0984e3'}
      elevation={'xlarge'}
      pad={{ left: 'medium', right: 'large', top: 'medium' }}
      header={
        <Box
          width={'100%'}
          direction={'row'}
          gap={'small'}
          justify={'center'}
          align={'center'}
          wrap={true}>
          <Avatar background={'#DADADA'} round={'full'}>
            <User size={'medium'} />
          </Avatar>
          <Text textAlign={'center'} margin={{ vertical: 'small' }}>
            Adrian Leung
          </Text>
        </Box>
      }
      footer={
        <Button
          plain
          alignSelf={'start'}
          icon={<Logout size={'medium'} style={{ padding: '10px' }} />}
          href={'/logout'}
          label={'Logout'}
        />
      }>
      <Box width={'100%'}>
        <Nav gap={'large'}>
          <Box>
            <Button
              plain
              alignSelf={'start'}
              icon={<MailOption />}
              label={'Mail'}
            />
          </Box>
          <Box>
            <Button
              plain
              alignSelf={'start'}
              icon={<SettingsOption />}
              label={'Settings'}
            />
          </Box>
        </Nav>
      </Box>
    </Sidebar>
  );
};

export default AdminSidebar;
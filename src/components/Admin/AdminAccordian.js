import React from 'react';
import { Accordion, AccordionPanel, Avatar, Box, Text, Button } from 'grommet';
import { User, MailOption, SettingsOption, Logout } from 'grommet-icons';

const AdminAccordian = _props => {
  return (
    <Box fill={'horizontal'}>
      <Accordion
        animate={true}
        round={{ corner: 'bottom', size: 'medium' }}
        style={{ zIndex: 0, position: 'fixed', width: '100%' }}>
        <AccordionPanel label={'Admin'} background={'#0984e3'}>
          <Box
            pad={{ horizontal: 'medium' }}
            background={'#0984e3'}
            height={'xsmall'}
            gap={'medium'}
            direction={'row'}
            justify={'start'}
            align={'center'}
            wrap={true}>
            <Avatar background={'#DADADA'} round={'full'}>
              <User size={'medium'} />
            </Avatar>
            <Text textAlign={'center'} margin={{ vertical: 'small' }}>
              Adrian Leung
            </Text>
          </Box>
          <Box
            background={'#0984e3'}
            height={'xxsmall'}
            pad={{ horizontal: 'medium' }}>
            <Button
              plain
              alignSelf={'start'}
              icon={<MailOption />}
              label={'Mail'}
            />
          </Box>
          <Box
            background={'#0984e3'}
            height={'xxsmall'}
            pad={{ horizontal: 'medium' }}>
            <Button
              plain
              alignSelf={'start'}
              icon={<SettingsOption />}
              label={'Settings'}
            />
          </Box>
          <Box
            background={'#0984e3'}
            height={'xxsmall'}
            round={{ corner: 'bottom', size: 'medium' }}
            pad={{ horizontal: 'medium' }}>
            <Button
              plain
              alignSelf={'start'}
              icon={<Logout size={'medium'} />}
              href={'/logout'}
              label={'Logout'}
            />
          </Box>
        </AccordionPanel>
      </Accordion>
    </Box>
  );
};

export default AdminAccordian;

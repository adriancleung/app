import React from 'react';
import { Accordion, AccordionPanel, Avatar, Box, Text, Button } from 'grommet';
import {
  Article,
  User,
  MailOption,
  SettingsOption,
  Logout,
  Notes,
} from 'grommet-icons';

const AdminAccordian = ({ option }) => {
  return (
    <Box fill={'horizontal'}>
      <Accordion
        animate={true}
        round={{ corner: 'bottom', size: 'medium' }}
        style={{ zIndex: 999, position: 'fixed', width: '100%' }}>
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
              icon={<Article />}
              label={'About'}
              onClick={e => {
                option('About');
              }}
            />
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
              onClick={e => {
                option('Mail');
              }}
            />
          </Box>
          <Box
            background={'#0984e3'}
            height={'xxsmall'}
            pad={{ horizontal: 'medium' }}>
            <Button
              plain
              alignSelf={'start'}
              icon={<Notes />}
              label={'Resume'}
              onClick={e => {
                option('Resume');
              }}
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
              onClick={e => {
                option('Settings');
              }}
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

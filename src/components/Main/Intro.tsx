import React from 'react';
import { Box, Heading } from 'grommet';
import SocialLinks from './SocialLinks';
import ModalLinks from './ModalLinks';

type Props = {};

const Intro: React.FC<Props> = () => {
  return (
    <Box
      margin={'large'}
      gap={'medium'}
      animation={{ type: 'fadeIn', duration: 2000 }}>
      <Heading size={'xlarge'} margin={{ bottom: 'xsmall' }}>
        Adrian Leung
      </Heading>
      <SocialLinks />
      <ModalLinks />
    </Box>
  );
};

export default Intro;

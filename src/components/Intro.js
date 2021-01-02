import React, { lazy, Suspense } from 'react';
import { Box, Heading } from 'grommet';

const SocialLinks = lazy(() => import('./SocialLinks'));
const ModalLinks = lazy(() => import('./ModalLinks'));

const Intro = _props => {
  return (
    <Suspense fallback={<div>Page is loading...</div>}>
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
    </Suspense>
  );
};

export default Intro;

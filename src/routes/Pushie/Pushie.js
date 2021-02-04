import React from 'react';
import { Box, Button, Image } from 'grommet';

const Pushie = _props => {
  return (
    <Box
      width={'100vw'}
      height={'100vh'}
      align={'center'}
      animation={{ type: 'fadeIn', duration: 2000 }}>
      <Box width={'calc(100vh * 16 / 9)'} height={'calc(100vw * 9 / 16)'}>
        <Button
          style={{
            height: 'calc(13.3vw * 1 / 3)',
            width: '13.3vw',
            position: 'relative',
            left: '6.7%',
            bottom: '-72.9%',
          }}
          href={'https://apps.apple.com/us/app/pushie/id1548868091'}
        />
        <Image
          src={require('../../assets/app_banner.png')}
          fit={'contain'}
          style={{ zIndex: -1 }}
        />
      </Box>
      <Button href={'/pushie/privacy'}>Privacy Policy</Button>
    </Box>
  );
};

export default Pushie;

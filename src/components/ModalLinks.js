import React, { useState } from 'react';
import { Box, Button, Layer } from 'grommet';
import { Close } from 'grommet-icons';
import AboutContent from './AboutContent';

const ModalLinks = props => {
  const [showAbout, setShowAbout] = useState(false);
  const [showContact, setShowContact] = useState(false);
  return (
    <>
      <Box direction={'row'} justify={'evenly'}>
        <Button
          label={'About'.toUpperCase()}
          onClick={() => setShowAbout(!showAbout)}
        />
        <Button
          label={'Contact'.toUpperCase()}
          onClick={() => setShowContact(!showContact)}
        />
      </Box>
      {showAbout && (
        <Layer
          onEsc={() => setShowAbout(false)}
          onClickOutside={() => setShowAbout(false)}>
          <Box
            width={'xlarge'}
            pad={{bottom: '10vh'}}
            animation={{ type: 'fadeIn', duration: 1000 }}>
            <Box height={'xsmall'}>
              <Button
                onClick={() => setShowAbout(false)}
                alignSelf={'end'}
                margin={'small'}>
                <Close size={'medium'} />
              </Button>
            </Box>
            <AboutContent />
          </Box>
        </Layer>
      )}
      {showContact && (
        <Layer
          onEsc={() => setShowContact(false)}
          onClickOutside={() => setShowContact(false)}>
          <Box
            width={'xlarge'}
            pad={{bottom: '10vh'}}
            animation={{ type: 'fadeIn', duration: 1000 }}>
            <Box height={'small'}>
              <Button
                onClick={() => setShowContact(false)}
                alignSelf={'end'}
                margin={'small'}>
                <Close size={'medium'} />
              </Button>
            </Box>
          </Box>
        </Layer>
      )}
    </>
  );
};

export default ModalLinks;

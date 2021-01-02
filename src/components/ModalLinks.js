import React, { useState, lazy, Suspense } from 'react';
import { Box, Button, Layer } from 'grommet';
import { Close } from 'grommet-icons';

const AboutContent = lazy(() => import('./AboutContent'));
const ContactContent = lazy(() => import('./ContactContent'));

const ModalLinks = _props => {
  const [showAbout, setShowAbout] = useState(false);
  const [showContact, setShowContact] = useState(false);
  return (
    <>
      <Suspense fallback={<div>Page is loading...</div>}>
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
            <Box width={'xlarge'} pad={{ bottom: '10vh' }}>
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
            <Box width={'xlarge'} pad={{ bottom: '10vh' }}>
              <Box height={'xxsmall'}>
                <Button
                  onClick={() => setShowContact(false)}
                  alignSelf={'end'}
                  margin={'small'}>
                  <Close size={'medium'} />
                </Button>
              </Box>
              <ContactContent showContact={value => setShowContact(value)} />
            </Box>
          </Layer>
        )}
      </Suspense>
    </>
  );
};

export default ModalLinks;

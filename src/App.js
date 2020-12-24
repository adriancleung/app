import React, { useEffect } from 'react';
import Intro from './components/Intro';
import { Grommet, Box } from 'grommet';
import './styles/App.module.css';

const theme = {
  global: {
    font: {
      family: 'Roboto',
      size: '18px',
      height: '20px',
    },
    focus: {
      border: {
        color: 'transparent',
      },
    },
  },
  button: {
    default: {
      border: {
        color: 'white',
      },
      color: 'white',
    },
  },
};

const App = _props => {
  const handleWindowSizeChange = () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  };

  useEffect(() => {
    handleWindowSizeChange();
    window.addEventListener('resize', handleWindowSizeChange);
    return () => window.removeEventListener('resize', handleWindowSizeChange);
  });

  return (
    <Grommet theme={theme}>
      <Box
        direction={'column'}
        justify={'center'}
        pad={'medium'}
        background={'black'}
        height={'calc(var(--vh, 1vh) * 100)'}
        width={'100vw'}>
        <Intro />
      </Box>
    </Grommet>
  );
};

export default App;

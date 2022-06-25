import React, { useEffect } from 'react';
import { Box } from 'grommet';
import Intro from '../components/Main/Intro';
import Projects from '../components/Main/Projects';
import Resume from '../components/Main/Resume';
import Sponsor from '../components/Main/Sponsor';

type Props = {};

const Main: React.FC<Props> = () => {
  const handleWindowSizeChange = () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  };

  useEffect(() => {
    handleWindowSizeChange();
    window.addEventListener('resize', handleWindowSizeChange);
    return () => window.removeEventListener('resize', handleWindowSizeChange);
  }, []);

  return (
    <>
      <Box
        direction={'column'}
        justify={'center'}
        pad={'medium'}
        background={'black'}
        height={'calc(var(--vh, 1vh) * 100)'}
        width={'100vw'}>
        <Intro />
      </Box>
      <Box
        direction={'column'}
        justify={'start'}
        background={'white'}
        height={'calc(var(--vh, 1vh) * 100)'}
        width={'100vw'}>
        <Projects />
      </Box>
      <Box
        direction={'column'}
        justify={'start'}
        pad={'medium'}
        background={'black'}
        height={'calc(var(--vh, 1,vh) * 100)'}
        width={'100vw'}>
        <Resume />
      </Box>
    </>
  );
};

export default Main;

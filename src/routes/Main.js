import React, { useEffect, lazy, Suspense } from 'react';
import { Box } from 'grommet';

const Intro = lazy(() => import('../components/Intro'));
const Projects = lazy(() => import('../components/Projects'));
const Resume = lazy(() => import('../components/Resume'));

const Main = _props => {
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
    <>
      <Suspense fallback={<div>Page is loading...</div>}>
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
      </Suspense>
    </>
  );
};

export default Main;

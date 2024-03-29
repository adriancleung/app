import React from 'react';
import { Box } from 'grommet';
import { PropagateLoader } from 'react-spinners';

type Props = {};

const Loading: React.FC<Props> = () => {
  return (
    <Box
      width={'100vw'}
      height={'100vh'}
      justify={'center'}
      align={'center'}
      background={'white'}>
      <PropagateLoader size={25} color={'black'} />
    </Box>
  );
};

export default Loading;

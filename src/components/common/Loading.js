import React from 'react';
import { Box } from 'grommet';
import { PropagateLoader } from 'react-spinners';

const Loading = _props => {
  return (
    <Box width={'100vw'} height={'100vh'} justify={'center'} align={'center'}>
      <PropagateLoader size={25} color={'#00ffcc'} />
    </Box>
  );
};

export default Loading;

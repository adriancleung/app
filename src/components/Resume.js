import React, { useState } from 'react';
import { Box, Heading } from 'grommet';
import { ScaleLoader } from 'react-spinners';

const Resume = _props => {
  const [resumeLoading, setResumeLoading] = useState(true);

  return (
    <Box height={'100%'}>
      <Heading>Resume</Heading>
      <Box height={'100%'} justify={'center'} align={'center'}>
        <ScaleLoader
          loading={resumeLoading}
          height={60}
          width={10}
          radius={20}
          color={'white'}
        />
      </Box>
    </Box>
  );
};

export default Resume;

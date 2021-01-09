import React, { useEffect, useState } from 'react';
import { Box, Text } from 'grommet';
import { ScaleLoader } from 'react-spinners';
import { getAboutContent } from '../../services/api';
import { SUCCESS_CODE } from '../../constants';
import parse from 'html-react-parser';

const About = _props => {
  const [about, setAbout] = useState('');
  const [aboutLoading, setAboutLoading] = useState(true);

  const loadAbout = () => {
    getAboutContent()
      .then(res => (res.status === SUCCESS_CODE ? setAbout(res.data) : null))
      .catch(err => console.error(err))
      .finally(() => setAboutLoading(false));
  };

  useEffect(() => {
    loadAbout();
  }, []);

  return (
    <>
      <Box width={'100%'} height={'100%'} justify={'center'} align={'center'}>
        <ScaleLoader
          loading={aboutLoading}
          height={60}
          width={10}
          radius={20}
          color={'white'}
        />
      </Box>
      {!aboutLoading && (
        <Box overflow={'scroll'}>
          <Text style={{ textAlign: 'justify' }} margin={'medium'}>
            {parse(about)}
          </Text>
        </Box>
      )}
    </>
  );
};

export default About;

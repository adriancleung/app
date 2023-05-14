import React, { useEffect, useState } from 'react';
import { Box, Text } from 'grommet';
import { ScaleLoader } from 'react-spinners';
import api from '../../services/api';
import parse from 'html-react-parser';

type Props = {};

const About: React.FC<Props> = () => {
  const [about, setAbout] = useState('');
  const [aboutLoading, setAboutLoading] = useState(true);

  const loadAbout = async () => {
    try {
      const response = await api.about.get();
      setAbout(response);
    } catch (err) {
      console.error(err);
    } finally {
      setAboutLoading(false);
    }
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

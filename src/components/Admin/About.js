import React, { useEffect, useState } from 'react';
import { Text, Button, TextArea } from 'grommet';
import { getAboutContent, updateAboutContent } from '../../services/api';

const About = () => {
  const [aboutSection, setAboutSection] = useState('');

  const loadAbout = () => {
    getAboutContent().then(res => setAboutSection(res.data));
  };

  useEffect(() => {
    loadAbout();
  }, []);

  return (
    <>
      <Text>Update About Section:</Text>
      <TextArea
        size={'small'}
        fill={true}
        value={aboutSection}
        onChange={e => setAboutSection(e.target.value)}
      />
      <Button
        onClick={() => {
          updateAboutContent(aboutSection);
        }}>
        Submit
      </Button>
    </>
  );
};

export default About;

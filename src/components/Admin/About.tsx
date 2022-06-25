import React, { useEffect, useState } from 'react';
import { Text, Button, TextArea } from 'grommet';
import api from '../../services/api';

type Props = {};

const About: React.FC<Props> = () => {
  const [aboutSection, setAboutSection] = useState('');

  const loadAbout = async () => {
    try {
      const response = await api.about.get();
      setAboutSection(response);
    } catch (err) {
      console.error(err);
    }
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
        onClick={async () => {
          try {
            const response = await api.about.update(aboutSection);
            if (response === 'OK') {
              alert('About section updated');
            } else {
              alert('Could not update about section');
            }
          } catch (err) {
            console.error(err);
            alert('Could not update about section');
          }
        }}>
        Submit
      </Button>
    </>
  );
};

export default About;

import React from 'react';
import { Box, Button } from 'grommet';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import styles from '../styles/SocialLinks.module.css';

const SocialLinks = _props => {
  return (
    <Box direction={'row'} gap={'medium'}>
      <Button href={'https://github.com/adriancleung'}>
        <GitHubIcon
          className={styles.ZoomOnHover}
          style={{ fontSize: '48px' }}
        />
      </Button>
      <Button href={'https://linkedin.com/in/adriancleung'}>
        <LinkedInIcon
          className={styles.ZoomOnHover}
          style={{ fontSize: '48px' }}
        />
      </Button>
      <Button href={'mailto:contact@adrianleung.dev'}>
        <MailOutlineIcon
          className={styles.ZoomOnHover}
          style={{ fontSize: '48px' }}
        />
      </Button>
    </Box>
  );
};

export default SocialLinks;
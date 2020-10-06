import React from 'react';
import styles from './styles.module.css';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import { socialMap } from './constants';

function Title() {
  const handleClick = (e, type) => {
    e.preventDefault();
    window.open(socialMap.get(type), '_self');
  };

  return (
    <>
    <div className={styles.App}>
      <h1 className={styles.TitleText}>Adrian Leung</h1>
      <div>
        <GitHubIcon className={styles.SocialIcons} style={{ color: 'white', fontSize: 50 }} onClick={(e) => handleClick(e, 'github')} />
        <LinkedInIcon className={styles.SocialIcons} style={{ color: 'white', fontSize: 50 }} onClick={(e) => handleClick(e, 'linkedin')} />
        <MailOutlineIcon className={styles.SocialIcons} style={{ color: 'white', fontSize: 50 }} onClick={(e) => handleClick(e, 'email')} />
      </div>
    </div>
    
    </>
  )
}

function App() {
  return (
    <Title />
  );
}

export default App;

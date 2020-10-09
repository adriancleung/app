import React, { useState } from "react";
import styles from "../styles/Title.module.css";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import { socialMap } from "../constants";
import Modal from "./Modal";

function Title() {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState("");

  const handleClick = (e, type) => {
    e.preventDefault();
    window.open(socialMap.get(type), "_self");
  };

  const handleModal = (content) => {
    setModalContent(content);
    setModalVisible(!modalVisible);
  };

  return (
    <>
      <div className={styles.App}>
        <Modal
          modalVisible={modalVisible}
          handleModal={handleModal}
          content={modalContent}
        />
        <div>
          <h1 className={styles.TitleText}>Adrian Leung</h1>
          <div>
            <GitHubIcon
              className={styles.SocialIcons}
              style={{ color: "white", fontSize: '4vw' }}
              onClick={(e) => handleClick(e, "github")}
            />
            <LinkedInIcon
              className={styles.SocialIcons}
              style={{ color: "white", fontSize: '4vw' }}
              onClick={(e) => handleClick(e, "linkedin")}
            />
            <MailOutlineIcon
              className={styles.SocialIcons}
              style={{ color: "white", fontSize: '4vw' }}
              onClick={(e) => handleClick(e, "email")}
            />
          </div>
        </div>
        <div className={styles.ModalLinksWrapper}>
          <p className={styles.ModalLinks} onClick={() => handleModal('Contact')}>Contact</p>
          <p className={styles.ModalLinks} onClick={() => handleModal('About me')}>About me</p>
        </div>
      </div>
    </>
  );
}

export default Title;

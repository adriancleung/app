import React from 'react';
import styles from '../styles/ModalContent.module.css';

function ModalContent(props) {
    return (
      <div className={styles.ModalContentWrapper}>
        <h1 className={styles.ModalHeader}>{props.content}</h1>
      </div>
    );
}

export default ModalContent;
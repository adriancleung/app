import React from "react";
import styles from "../styles/Modal.module.css";
import CloseIcon from "@material-ui/icons/Close";
import ModalContent from "./ModalContent";

function Modal(props) {
  return (
    <div
      className={`${styles.Modal} ${
        props.modalVisible ? styles.ModalShown : styles.ModalHidden
      }`}
    >
      <div className={styles.ModalClose}>
        <CloseIcon
          style={{ color: "white", fontSize: 40 }}
          onClick={() => props.handleModal('')}
        />
      </div>
      <ModalContent content={props.content} />
    </div>
  );
}

export default Modal;

import React, { useEffect } from "react";
import { StyledModal } from "./styles/Modal.styled";

const Modal = ({ notificationContent, closeNotification, notificationColor }) => {
  useEffect(() => {
      setTimeout(() => {
          closeNotification()
      },5000)
  },[closeNotification])

  return (
    <StyledModal notificationColor={notificationColor}>
      <p>{notificationContent}</p>
      {/* <p onClick={closeNotification}>X</p> */}
    </StyledModal>
  );
};

export default Modal;

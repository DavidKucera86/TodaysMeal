import React, { useEffect } from "react";

const Modal = ({ notificationContent, closeNotification }) => {
  useEffect(() => {
      setTimeout(() => {
          closeNotification()
      },5000)
  },[closeNotification])

  return (
    <section>
      <p>{notificationContent}</p>
      {/* <p onClick={closeNotification}>X</p> */}
    </section>
  );
};

export default Modal;

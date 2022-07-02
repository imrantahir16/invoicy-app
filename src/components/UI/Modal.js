import React from "react";
import ReactDOM from "react-dom";

const Backdrop = (props) => {
  return (
    <div
      className="fixed inset-0 z-20 h-screen w-full bg-black/75"
      onClick={props.onClose}
    />
  );
};

const ModalOverlay = (props) => {
  return (
    <div className="fixed top-[15vh] left-[5%] z-30 w-[90%]  rounded-lg bg-white p-4 shadow-md">
      <div>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");
const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </>
  );
};

export default Modal;

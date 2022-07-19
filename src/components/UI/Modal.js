import React from "react";
import ReactDOM from "react-dom";
import { motion } from "framer-motion";

const Backdrop = (props) => {
  const clickedBackdrop = () => {
    props.onClose();
  };
  return (
    <div
      className="fixed inset-0 z-20 h-screen w-full bg-black/75"
      onClick={clickedBackdrop}
    />
  );
};

const ModalOverlay = (props) => {
  return (
    <motion.div
      className="modal-container"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
      initial={{
        opacity: 0,
        translateY: "-3rem",
      }}
      animate={{
        opacity: 1,
        translateY: 0,
      }}
      transition={{
        type: "spring",
        stiffness: 40,
        damping: 15,
      }}
    >
      <div>{props.children}</div>
    </motion.div>
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

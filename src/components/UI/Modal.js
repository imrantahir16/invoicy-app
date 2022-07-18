import React from "react";
import ReactDOM from "react-dom";
import { motion } from "framer-motion";

const Backdrop = (props) => {
  const clickedBackdrop = () => {
    props.onClose();
    console.log("backdrop clicked");
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
        translateX: "-50%",
        translateY: "-55%",
      }}
      animate={{
        opacity: 1,
        translateX: "-50%",
        translateY: "-50%",
      }}
      transition={{
        type: "spring",
        stiffness: 40,
        damping: 15,
      }}
    >
      <div className="flex min-w-max items-end justify-center bg-blue-300 text-center sm:items-center sm:p-0">
        <div className="overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:w-full sm:max-w-lg">
          {props.children}
        </div>
      </div>
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

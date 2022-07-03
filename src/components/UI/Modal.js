import React from "react";
import ReactDOM from "react-dom";
import { motion } from "framer-motion";

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
    <motion.div
      className="modal-container"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
      initial={{
        opacity: 0,
        translateY: "-2rem",
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
      <div className="fixed inset-0 z-30 overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div className="transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
            {props.children}
          </div>
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

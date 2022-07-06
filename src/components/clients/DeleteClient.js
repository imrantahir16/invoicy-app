import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Modal from "../UI/Modal";
import ModalActions from "../UI/ModalActions";
import ModalContent from "../UI/ModalContent";
import Button from "../UI/Button";
import {
  onConfirmDeleteClient,
  setDeletedId,
  getDeletedId,
} from "../../store/clientsSlice";

const DeleteClient = ({ onClose }) => {
  const dispatch = useDispatch();
  const deletedId = useSelector(getDeletedId);

  const onCloseHandler = useCallback(() => {
    dispatch(setDeletedId(null));
    onClose();
  }, [dispatch, onClose]);

  const onDeleteConfirmHandler = useCallback(() => {
    dispatch(onConfirmDeleteClient());
    onClose();
  }, [dispatch, onClose]);

  return (
    <Modal>
      <ModalContent>
        <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
          <FontAwesomeIcon
            className="h-6 w-6 text-red-500"
            icon={faTriangleExclamation}
          />
        </div>
        <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
          <h3 className="text-lg font-medium leading-6 text-slate-900">
            Delete Client
          </h3>
          <div className="mt-2 ">
            {deletedId && (
              <p className="text-base text-slate-500">
                Are you sure you want to delete your exisiting client? This
                action cannot be undone.
              </p>
            )}
          </div>
        </div>
      </ModalContent>
      <ModalActions>
        <Button danger={"true"} onClick={onDeleteConfirmHandler}>
          Delete
        </Button>
        <Button outlined={1} secondary={1} onClick={onCloseHandler}>
          Cancel
        </Button>
      </ModalActions>
    </Modal>
  );
};

export default DeleteClient;

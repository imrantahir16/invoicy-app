import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDeletedId, getDeletedId } from "../../store/productsSlice";
import Button from "../UI/Button";
import Modal from "../UI/Modal";
import ModalActions from "../UI/ModalActions";
import ModalContent from "../UI/ModalContent";
import { onConfirmDeleteProduct } from "../../store/productsSlice";

const DeleteProduct = ({ onClose }) => {
  const dispatch = useDispatch();
  const deletedId = useSelector(getDeletedId);

  const onCloseHandler = useCallback(() => {
    dispatch(setDeletedId(null));
    onClose();
  }, [dispatch, onClose]);

  useEffect(() => {
    if (deletedId !== null) {
      console.log("deleting product");
    }
  }, [deletedId]);
  return (
    <Modal onClose={onCloseHandler}>
      <ModalContent>{deletedId}</ModalContent>
      <ModalActions>
        <Button
          danger={"true"}
          onClick={() => {
            dispatch(onConfirmDeleteProduct());
          }}
        >
          Delete
        </Button>
        <Button outlined={1} secondary={1} onClick={onCloseHandler}>
          Cancel
        </Button>
      </ModalActions>
    </Modal>
  );
};

export default DeleteProduct;

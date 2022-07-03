import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setEditedId, getEditedId } from "../../store/productsSlice";
import Button from "../UI/Button";
import Modal from "../UI/Modal";
import ModalActions from "../UI/ModalActions";
import ModalContent from "../UI/ModalContent";

const EditProduct = ({ onClose }) => {
  const dispatch = useDispatch();
  const editedId = useSelector(getEditedId);

  const onCloseHandler = useCallback(() => {
    dispatch(setEditedId(null));
    onClose();
  }, [dispatch, onClose]);

  useEffect(() => {
    if (editedId !== null) {
      console.log("editing product");
    }
  }, [editedId]);

  return (
    <Modal onClose={onCloseHandler}>
      <ModalContent>
        <div>{editedId}</div>
      </ModalContent>
      <ModalActions>
        <Button onClick={() => {}}>Confirm</Button>
        <Button outlined={1} secondary={1} onClick={onCloseHandler}>
          Cancel
        </Button>
      </ModalActions>
    </Modal>
  );
};

export default EditProduct;

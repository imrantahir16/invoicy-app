import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setEditedId } from "../../store/productsSlice";
import Button from "../UI/Button";
import Modal from "../UI/Modal";

const EditProduct = () => {
  const dispatch = useDispatch();
  const editedId = useSelector((state) => state.products.editedId);

  const onCloseHandler = useCallback(() => {
    dispatch(setEditedId(null));
  }, [dispatch]);

  useEffect(() => {
    if (editedId !== null) {
      console.log("editing");
    }
  }, [editedId]);

  return editedId !== null ? (
    <Modal onClose={onCloseHandler}>
      <div>{editedId}</div>
      <Button onClick={onCloseHandler}>close</Button>
    </Modal>
  ) : null;
};

export default EditProduct;

import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import {
  setEditedId,
  getEditedId,
  getAllProducts,
  onConfirmEditProduct,
} from "../../store/productsSlice";
import Button from "../UI/Button";
import Modal from "../UI/Modal";
import ModalActions from "../UI/ModalActions";
import ModalContent from "../UI/ModalContent";
import ProductInputFields from "./ProductInputFields";
import { isNotEmpty, isNotZero } from "../../utilities/utilities";
import SectionTitle from "../common/SectionTitle";

const emptyForm = {
  id: "",
  image: "",
  productID: "",
  productName: "",
  price: 0,
  quantity: 0,
};

const EditProduct = ({ onClose }) => {
  const dispatch = useDispatch();
  const editedId = useSelector(getEditedId);
  const products = useSelector(getAllProducts);
  const [productForm, setProductForm] = useState(emptyForm);
  const [isInputTouched, setIsInputTouched] = useState(false);
  const [validForm, setValidForm] = useState(
    Object.keys(emptyForm).reduce((a, b) => {
      return { ...a, [b]: false };
    }, {})
  );

  const onCloseHandler = useCallback(() => {
    dispatch(setEditedId(null));
    onClose();
  }, [dispatch, onClose]);

  const productInputFieldHandler = (event, keyName) => {
    const value = event.target.value;

    setProductForm((prev) => {
      return { ...prev, [keyName]: value };
    });
  };

  const imageChangeHandler = useCallback((str) => {
    // setting client form
    setProductForm((prev) => ({ ...prev, image: str }));
  }, []);

  const submitFormHandler = useCallback(
    (e) => {
      e.preventDefault();
      setIsInputTouched(true);
      const isValid = Object.keys(validForm).every((key) => validForm[key]);
      if (!isValid) {
        toast.error("Invalid product detail", {
          position: "bottom-center",
          autoClose: 2000,
        });

        return;
      }
      toast.success("Successfully updated!", {
        position: "bottom-center",
        autoClose: 2000,
      });
      dispatch(onConfirmEditProduct(productForm));
      onClose();
      setIsInputTouched(false);
    },
    [validForm, dispatch, productForm, onClose]
  );

  useEffect(() => {
    setValidForm((prev) => ({
      id: true,
      image: true,
      productID: isNotEmpty(productForm?.productID),
      productName: isNotEmpty(productForm?.productName),
      price: isNotZero(productForm?.price),
      quantity: isNotZero(productForm?.quantity),
    }));
  }, [productForm]);

  useEffect(() => {
    if (editedId !== null) {
      console.log("editing product");
      const isFindIndex = products.findIndex(
        (product) => product.id === editedId
      );
      if (isFindIndex !== -1) {
        setProductForm({ ...products[isFindIndex] });
      }
    }
  }, [editedId, products]);

  return (
    <Modal onClose={onCloseHandler}>
      <form onSubmit={submitFormHandler}>
        <ModalContent>
          <div className="mt-3 w-full text-center sm:mt-0 sm:ml-4 sm:text-left">
            <SectionTitle>Edit product</SectionTitle>
            <ProductInputFields
              productForm={productForm}
              validForm={validForm}
              onImageChange={imageChangeHandler}
              onProductInput={productInputFieldHandler}
              isInputTouched={isInputTouched}
            />
          </div>
        </ModalContent>
        <ModalActions>
          <Button type="submit">Confirm</Button>
          <Button outlined={1} secondary={1} onClick={onCloseHandler}>
            Cancel
          </Button>
        </ModalActions>
      </form>
    </Modal>
  );
};

export default EditProduct;

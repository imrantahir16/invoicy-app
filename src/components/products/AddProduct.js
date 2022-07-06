import React, { useState, useCallback, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { nanoid } from "nanoid";
import {
  addProduct,
  resetProductForm,
  getNewForm,
} from "../../store/productsSlice";
import Button from "../UI/Button";
import SectionTitle from "../common/SectionTitle";
import ProductInputFields from "./ProductInputFields";
import { isNotEmpty, isNotZero } from "../../utilities/utilities";

const emptyForm = {
  id: "",
  image: "",
  productID: "",
  productName: "",
  price: 0,
  quantity: 0,
};

const AddProduct = () => {
  const dispatch = useDispatch();
  const productNewForm = useSelector(getNewForm);
  const [productForm, setProductForm] = useState(emptyForm);
  const [isInputTouched, setIsInputTouched] = useState(false);

  const [validForm, setValidForm] = useState(
    Object.keys(emptyForm).reduce((a, b) => {
      return { ...a, [b]: false };
    }, {})
  );

  const imageChangeHandler = useCallback((str) => {
    // setting client form
    setProductForm((prev) => ({ ...prev, image: str }));
  }, []);

  const productInputFieldHandler = (event, keyName) => {
    const value = event.target.value;

    setProductForm((prev) => {
      return { ...prev, [keyName]: value };
    });
  };

  const submitProductHandler = useCallback(
    (e) => {
      e.preventDefault();
      setIsInputTouched(true);

      const isValid = Object.keys(validForm).every((key) => validForm[key]);
      if (!isValid) {
        toast.error("Invalid product details", {
          position: "bottom-center",
          autoClose: 2000,
        });
        return;
      }
      toast.success("Product Added!", {
        position: "bottom-center",
        autoClose: 2000,
      });
      dispatch(addProduct({ ...productForm, id: nanoid() }));
      dispatch(resetProductForm(emptyForm));
      console.log("submitted");
      setIsInputTouched(false);
    },
    [validForm, productForm, dispatch]
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
    productNewForm && setProductForm(productNewForm);
  }, [productNewForm]);

  return (
    <form onSubmit={submitProductHandler} className="rounded-xl bg-white p-4">
      <SectionTitle>Add Product</SectionTitle>
      <ProductInputFields
        productForm={productForm}
        validForm={validForm}
        onImageChange={imageChangeHandler}
        isInputTouched={isInputTouched}
        onProductInput={productInputFieldHandler}
      />
      <div className="mt-2">
        <Button type="submit" block="true">
          <span className="ml-2 inline-block ">Submit</span>
        </Button>
      </div>
    </form>
  );
};

export default AddProduct;

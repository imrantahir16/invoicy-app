import React, { useState, useCallback, useMemo, useEffect } from "react";
import ImageUpload from "../common/ImageUpload";
import SectionTitle from "../common/SectionTitle";
import { useAppContext } from "../../context/AppContext";
import {
  defaultSkeletonLargeStyle,
  defaultSkeletonNormalStyle,
  defaultInputLargeStyle,
  defaultInputLargeInvalidStyle,
  defaultInputInvalidStyle,
  defaultInputStyle,
} from "../../constants/defaultStyles";
import Skeleton from "react-loading-skeleton";
import Button from "../UI/Button";
import { nanoid } from "nanoid";
import { isNotEmpty, isNotZero } from "../../utilities/utilities";
import { useSelector, useDispatch } from "react-redux";
import { addProduct } from "../../store/productsSlice";

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
  const productNewForm = useSelector((state) => state.products.newForm);
  const [productForm, setProductForm] = useState(emptyForm);
  const [isInputTouched, setIsInputTouched] = useState(false);
  const { initLoading: isInitLoading } = useAppContext();

  const [validForm, setValidForm] = useState(
    Object.keys(emptyForm).reduce((a, b) => {
      return { ...a, [b]: false };
    }, {})
  );

  const imageChangeHandler = useCallback((str) => {
    // setting client form
    setProductForm((prev) => ({ ...prev, image: str }));
    // dispatching client form field of image
    // console.log(str);
  }, []);

  const imageUploadClasses = useMemo(() => {
    const defaultClasses = "rounded-xl";

    if (!productForm.image) {
      return `${defaultClasses} border-dashed border-2 border-indigo-400`;
    }

    return defaultClasses;
  }, [productForm]);

  const productInputFieldHandler = (event, keyName) => {
    const value = event.target.value;

    setProductForm((prev) => {
      return { ...prev, [keyName]: value };
    });

    //dispatch client data
  };

  const submitProductHandler = useCallback(
    (e) => {
      e.preventDefault();
      setIsInputTouched(true);

      const isValid = Object.keys(validForm).every((key) => validForm[key]);
      if (!isValid) {
        console.log("not Valid");

        return;
      }
      // console.log({ ...productForm, id: nanoid() });
      dispatch(addProduct({ ...productForm, id: nanoid() }));
      console.log("submitted");
      setIsInputTouched(false);
    },
    [validForm, productForm]
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

  // useEffect(() => {
  //   if (productNewForm) {
  //     setProductForm(productNewForm);
  //   }
  // }, [productNewForm]);

  return (
    <form onSubmit={submitProductHandler} className="rounded-xl bg-white p-4">
      <SectionTitle>Add Product</SectionTitle>
      <div className="mt-2 flex">
        {isInitLoading ? (
          <Skeleton className="skeleton-input-radius skeleton-image border-2 border-dashed" />
        ) : (
          <ImageUpload
            keyName="productImage"
            url={productForm.image}
            className={imageUploadClasses}
            onImageChange={imageChangeHandler}
          />
        )}

        <div className="flex-1 pl-3">
          {isInitLoading ? (
            <Skeleton className={defaultSkeletonLargeStyle} />
          ) : (
            <input
              className={
                !validForm.productID && isInputTouched
                  ? defaultInputLargeInvalidStyle
                  : defaultInputLargeStyle
              }
              placeholder="Product ID"
              type="text"
              value={productForm.productID}
              onChange={(e) => productInputFieldHandler(e, "productID")}
              disabled={isInitLoading}
            />
          )}
        </div>
      </div>
      <div className="mt-2 flex">
        <div className="flex-1">
          {isInitLoading ? (
            <Skeleton className={defaultSkeletonNormalStyle} />
          ) : (
            <input
              className={
                !validForm.productName && isInputTouched
                  ? defaultInputInvalidStyle
                  : defaultInputStyle
              }
              placeholder="Product Name"
              type="text"
              value={productForm.productName}
              onChange={(e) => productInputFieldHandler(e, "productName")}
              disabled={isInitLoading}
            />
          )}
        </div>
      </div>
      <div className="mt-2 flex">
        <div className="flex-1">
          {isInitLoading ? (
            <Skeleton className={defaultSkeletonNormalStyle} />
          ) : (
            <input
              className={
                !validForm.price && isInputTouched
                  ? defaultInputInvalidStyle
                  : defaultInputStyle
              }
              placeholder="Price"
              type="number"
              value={productForm.price}
              onChange={(e) => productInputFieldHandler(e, "price")}
              disabled={isInitLoading}
            />
          )}
        </div>
      </div>
      <div className="mt-2 flex">
        <div className="flex-1">
          {isInitLoading ? (
            <Skeleton className={defaultSkeletonNormalStyle} />
          ) : (
            <input
              className={
                !validForm.quantity && isInputTouched
                  ? defaultInputInvalidStyle
                  : defaultInputStyle
              }
              placeholder="Quantity"
              type="number"
              value={productForm.quantity}
              onChange={(e) => productInputFieldHandler(e, "quantity")}
              disabled={isInitLoading}
            />
          )}
        </div>
      </div>
      <div className="mt-2">
        <Button type="submit" block="true">
          <span className="ml-2 inline-block ">Submit</span>
        </Button>
      </div>
    </form>
  );
};

export default AddProduct;

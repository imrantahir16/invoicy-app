import React, { useMemo } from "react";
import ImageUpload from "../common/ImageUpload";
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

const ProductField = ({
  productForm,
  onImageChange,
  validForm,
  isInputTouched,
  onProductInput,
}) => {
  const { initLoading: isInitLoading } = useAppContext();

  const imageUploadClasses = useMemo(() => {
    const defaultClasses = "rounded-xl";

    if (!productForm.image) {
      return `${defaultClasses} border-dashed border-2 border-indigo-400`;
    }

    return defaultClasses;
  }, [productForm]);

  return (
    <>
      <div className="mt-2 flex">
        {isInitLoading ? (
          <Skeleton className="skeleton-input-radius skeleton-image border-2 border-dashed" />
        ) : (
          <ImageUpload
            keyName="productImage"
            url={productForm.image}
            className={imageUploadClasses}
            onImageChange={onImageChange}
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
              onChange={(e) => onProductInput(e, "productID")}
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
              onChange={(e) => onProductInput(e, "productName")}
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
              onChange={(e) => onProductInput(e, "price")}
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
              onChange={(e) => onProductInput(e, "quantity")}
              disabled={isInitLoading}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default ProductField;

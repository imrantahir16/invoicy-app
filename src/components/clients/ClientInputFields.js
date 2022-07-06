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

const ClientInputFields = ({
  clientForm,
  onImageChange,
  validForm,
  onClientInput,
  isInputTouched,
}) => {
  const { initLoading: isInitLoading } = useAppContext();

  const imageUploadClasses = useMemo(() => {
    const defaultClasses = "rounded-xl";

    if (!clientForm.image) {
      return `${defaultClasses} border-dashed border-2 border-indigo-400`;
    }

    return defaultClasses;
  }, [clientForm]);

  return (
    <>
      <div className="mt-2 flex">
        {isInitLoading ? (
          <Skeleton className="skeleton-input-radius skeleton-image border-2 border-dashed" />
        ) : (
          <ImageUpload
            keyName="imageUpload"
            url={clientForm.image}
            className={imageUploadClasses}
            onImageChange={onImageChange}
          />
        )}
        <div className="flex-1 pl-3">
          {isInitLoading ? (
            <Skeleton className={defaultSkeletonLargeStyle} />
          ) : (
            <input
              placeholder="Client name"
              className={
                !validForm.clientName && isInputTouched
                  ? defaultInputLargeInvalidStyle
                  : defaultInputLargeStyle
              }
              disabled={isInitLoading}
              value={clientForm.clientName}
              onChange={(e) => onClientInput(e, "clientName")}
            />
          )}
        </div>
      </div>
      <div className="mt-2 flex">
        <div className="flex-1 ">
          {isInitLoading ? (
            <Skeleton className={defaultSkeletonNormalStyle} />
          ) : (
            <input
              placeholder="Email address"
              className={
                !validForm.email && isInputTouched
                  ? defaultInputInvalidStyle
                  : defaultInputStyle
              }
              disabled={isInitLoading}
              value={clientForm.email}
              onChange={(e) => onClientInput(e, "email")}
            />
          )}
        </div>
      </div>
      <div className="mt-2 flex">
        <div className="flex-1 ">
          {isInitLoading ? (
            <Skeleton className={defaultSkeletonNormalStyle} />
          ) : (
            <input
              placeholder="Mobile No."
              className={
                !validForm.mobileNo && isInputTouched
                  ? defaultInputInvalidStyle
                  : defaultInputStyle
              }
              disabled={isInitLoading}
              value={clientForm.mobileNo}
              onChange={(e) => onClientInput(e, "mobileNo")}
            />
          )}
        </div>
      </div>
      <div className="mt-2 flex">
        <div className="flex-1 ">
          {isInitLoading ? (
            <Skeleton className={defaultSkeletonNormalStyle} />
          ) : (
            <input
              placeholder="Billing address"
              className={
                !validForm.address && isInputTouched
                  ? defaultInputInvalidStyle
                  : defaultInputStyle
              }
              disabled={isInitLoading}
              value={clientForm.address}
              onChange={(e) => onClientInput(e, "address")}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default ClientInputFields;

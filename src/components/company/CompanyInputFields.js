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

const CompanyInputFields = ({
  companyForm,
  onImageChange,
  validForm,
  onCompanyInput,
  isInputTouched,
}) => {
  const { initLoading: isInitLoading } = useAppContext();
  const imageUploadClasses = useMemo(() => {
    const defaultClasses = "rounded-xl";

    if (!companyForm.image) {
      return `${defaultClasses} border-dashed border-2 border-indigo-400`;
    }

    return defaultClasses;
  }, [companyForm]);

  return (
    <>
      <div className="mt-2 flex">
        {isInitLoading ? (
          <Skeleton className="skeleton-input-radius skeleton-image border-2 border-dashed" />
        ) : (
          <ImageUpload
            keyName="imageUpload"
            url={companyForm.image}
            className={imageUploadClasses}
            onImageChange={onImageChange}
          />
        )}
        <div className="flex-1 pl-3">
          {isInitLoading ? (
            <Skeleton className={defaultSkeletonLargeStyle} />
          ) : (
            <input
              placeholder="Comapny name"
              className={
                !validForm.companyName && isInputTouched
                  ? defaultInputLargeInvalidStyle
                  : defaultInputLargeStyle
              }
              disabled={isInitLoading}
              value={companyForm.companyName}
              onChange={(e) => onCompanyInput(e, "companyName")}
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
              value={companyForm.companyEmail}
              placeholder="Company Email"
              className={
                !validForm.companyEmail && isInputTouched
                  ? defaultInputInvalidStyle
                  : defaultInputStyle
              }
              onChange={(e) => onCompanyInput(e, "companyEmail")}
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
              value={companyForm.companyMobile}
              placeholder="Company Phone"
              className={
                !validForm.companyMobile && isInputTouched
                  ? defaultInputInvalidStyle
                  : defaultInputStyle
              }
              onChange={(e) => onCompanyInput(e, "companyMobile")}
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
              value={companyForm.billingAddress}
              placeholder="Company Address"
              className={
                !validForm.billingAddress && isInputTouched
                  ? defaultInputInvalidStyle
                  : defaultInputStyle
              }
              onChange={(e) => onCompanyInput(e, "billingAddress")}
              disabled={isInitLoading}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default CompanyInputFields;

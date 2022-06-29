import React, { useCallback, useMemo, useState, useEffect } from "react";
import ImageUpload from "../common/ImageUpload";
import SectionTitle from "../common/SectionTitle";
import Button from "../UI/Button";
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
import { nanoid } from "nanoid";

const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/;
const phoneRegex =
  /^((\+92)?(0092)?(92)?(0)?)(3)([0-9]{2})((-?)|( ?))([0-9]{7})$/gm;

const emptyForm = {
  id: "",
  image: "",
  clientName: "",
  email: "",
  mobileNo: "",
  address: "",
};

const AddClient = () => {
  const [clientForm, setClientForm] = useState(emptyForm);
  const [isInputTouched, setIsInputTouched] = useState(false);
  const { initLoading: isInitLoading } = useAppContext();

  const [validForm, setValidForm] = useState(
    Object.keys(emptyForm).reduce((a, b) => {
      return { ...a, [b]: false };
    }, {})
  );

  const imageChangeHandler = useCallback((str) => {
    // setting client form
    setClientForm((prev) => ({ ...prev, image: str }));
    // dispatching client form field of image
    console.log(str);
  }, []);

  const imageUploadClasses = useMemo(() => {
    const defaultClasses = "rounded-xl";

    if (!clientForm.image) {
      return `${defaultClasses} border-dashed border-2 border-indigo-400`;
    }

    return defaultClasses;
  }, [clientForm]);

  const clientInputFieldHandler = (event, keyName) => {
    const value = event.target.value;

    setClientForm((prev) => {
      return { ...prev, [keyName]: value };
    });

    //dispatch client data
  };

  const submitClientHandler = useCallback(
    (e) => {
      e.preventDefault();
      setIsInputTouched(true);

      const isValid = Object.keys(validForm).every((key) => validForm[key]);
      if (!isValid) {
        console.log("not Valid");
        return;
      }
      console.log({ ...clientForm, id: nanoid() });
      console.log("submitted");
      setIsInputTouched(false);
    },
    [validForm, clientForm]
  );

  useEffect(() => {
    const isValidEmail =
      clientForm?.email?.trim() && clientForm.email.match(emailRegex);
    const isValidPhone =
      clientForm?.mobileNo?.trim() && clientForm.mobileNo.match(phoneRegex);

    setValidForm((prev) => ({
      id: true,
      image: true,
      clientName: clientForm?.clientName?.trim() ? true : false,
      email: isValidEmail ? true : false,
      address: clientForm?.address?.trim() ? true : false,
      mobile: isValidPhone ? true : false,
    }));
  }, [clientForm]);

  return (
    <form onSubmit={submitClientHandler} className="rounded-xl bg-white p-4">
      <SectionTitle>Add Client</SectionTitle>
      <div className="mt-2 flex">
        {isInitLoading ? (
          <Skeleton className="skeleton-input-radius skeleton-image border-2 border-dashed" />
        ) : (
          <ImageUpload
            keyName="imageUpload"
            url={clientForm.image}
            className={imageUploadClasses}
            onImageChange={imageChangeHandler}
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
              onChange={(e) => clientInputFieldHandler(e, "clientName")}
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
              onChange={(e) => clientInputFieldHandler(e, "email")}
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
              onChange={(e) => clientInputFieldHandler(e, "mobileNo")}
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
              onChange={(e) => clientInputFieldHandler(e, "address")}
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

export default AddClient;

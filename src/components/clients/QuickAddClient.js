import React, { useCallback, useMemo, useState } from "react";
import ImageUpload from "../common/ImageUpload";
import SectionTitle from "../common/SectionTitle";
import Button from "../UI/Button";
import {
  defaultInputLargeStyle,
  defaultInputStyle,
} from "../../constants/defaultStyles";

const isValidEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const emptyForm = {
  id: "",
  image: "",
  name: "",
  email: "",
  mobile: "",
  address: "",
};

const QuickAddClient = () => {
  const [clientForm, setClientForm] = useState(emptyForm);
  const [isInputTouched, setIsInputTouched] = useState(false);

  const OnchangeImageHandler = useCallback((str) => {
    // setting client form
    setClientForm((prev) => ({ ...prev, image: str }));
    // dispatching client form field of image
    console.log(str);
  }, []);

  const imageUploadClasses = useMemo(() => {
    const defaultClasses = "rounded-xl";

    return defaultClasses;
  });

  const clientInputFieldHandler = (event, keyName) => {
    const value = event.target.value;

    setClientForm((prev) => {
      return { ...prev, [keyName]: value };
    });

    //dispatch client data
  };
  const submitClientHandler = (e) => {
    e.preventDefault();
    setIsInputTouched(true);
    console.log(clientForm);
    console.log("submitted");
    setIsInputTouched(false);
  };

  return (
    <form onSubmit={submitClientHandler} className="rounded-xl bg-white p-4">
      <SectionTitle>Add Quick Client</SectionTitle>
      <div className="mt-2 flex">
        <ImageUpload
          keyName="imageUpload"
          url={clientForm.image}
          className={imageUploadClasses}
          onImageChange={OnchangeImageHandler}
        />
        <div className="flex-1 pl-3">
          <input
            placeholder="Client name"
            className={defaultInputLargeStyle}
            onChange={(e) => clientInputFieldHandler(e, "name")}
          />
        </div>
      </div>
      <div className="mt-2 flex">
        <div className="flex-1 ">
          <input
            placeholder="Email address"
            className={defaultInputStyle}
            onChange={(e) => clientInputFieldHandler(e, "email")}
          />
        </div>
      </div>
      <div className="mt-2 flex">
        <div className="flex-1 ">
          <input
            placeholder="Mobile No."
            className={defaultInputStyle}
            onChange={(e) => clientInputFieldHandler(e, "mobile")}
          />
        </div>
      </div>
      <div className="mt-2 flex">
        <div className="flex-1 ">
          <input
            placeholder="Billing address"
            className={defaultInputStyle}
            onChange={(e) => clientInputFieldHandler(e, "address")}
          />
        </div>
      </div>
      <div className="mt-2">
        <Button type="submit" block={1}>
          <span className="ml-2 inline-block">Submit</span>
        </Button>
      </div>
    </form>
  );
};

export default QuickAddClient;

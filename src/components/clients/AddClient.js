import React, { useCallback, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { nanoid } from "nanoid";
import {
  addNewClient,
  resetClientForm,
  getNewForm,
} from "../../store/clientsSlice";
import SectionTitle from "../common/SectionTitle";
import Button from "../UI/Button";
import ClientInputFields from "./ClientInputFields";
import { emailRegex, phoneRegex, isNotEmpty } from "../../utilities/utilities";

const emptyForm = {
  id: "",
  image: "",
  clientName: "",
  email: "",
  mobileNo: "",
  address: "",
};

const AddClient = () => {
  const dispatch = useDispatch();
  const clientNewForm = useSelector(getNewForm);
  const [clientForm, setClientForm] = useState(emptyForm);
  const [isInputTouched, setIsInputTouched] = useState(false);

  const [validForm, setValidForm] = useState(
    Object.keys(emptyForm).reduce((a, b) => {
      return { ...a, [b]: false };
    }, {})
  );

  const imageChangeHandler = useCallback((str) => {
    setClientForm((prev) => ({ ...prev, image: str }));
  }, []);

  const clientInputFieldHandler = (event, keyName) => {
    const value = event.target.value;

    setClientForm((prev) => {
      return { ...prev, [keyName]: value };
    });
  };

  const submitClientHandler = useCallback(
    (e) => {
      e.preventDefault();
      setIsInputTouched(true);

      const isValid = Object.keys(validForm).every((key) => validForm[key]);
      if (!isValid) {
        toast.error("Invalid client details", {
          position: "bottom-center",
          autoClose: 2000,
        });
        return;
      }
      toast.success("Client Added!", {
        position: "bottom-center",
        autoClose: 2000,
      });
      dispatch(addNewClient({ ...clientForm, id: nanoid() }));
      dispatch(resetClientForm(emptyForm));
      console.log("submitted");
      setIsInputTouched(false);
    },
    [validForm, clientForm, dispatch]
  );

  useEffect(() => {
    const isValidEmail =
      isNotEmpty(clientForm?.email) && clientForm.email.match(emailRegex);
    const isValidPhone =
      isNotEmpty(clientForm?.mobileNo) && clientForm.mobileNo.match(phoneRegex);

    setValidForm((prev) => ({
      id: true,
      image: true,
      clientName: isNotEmpty(clientForm?.clientName),
      email: isValidEmail,
      address: isNotEmpty(clientForm?.address),
      mobile: isValidPhone,
    }));
  }, [clientForm]);

  useEffect(() => {
    clientNewForm && setClientForm(clientNewForm);
  }, [clientNewForm]);

  return (
    <form onSubmit={submitClientHandler} className="rounded-xl bg-white p-4">
      <SectionTitle>Add Client</SectionTitle>
      <ClientInputFields
        clientForm={clientForm}
        validForm={validForm}
        onClientInput={clientInputFieldHandler}
        onImageChange={imageChangeHandler}
        isInputTouched={isInputTouched}
      />
      <div className="mt-2">
        <Button type="submit" block="true">
          <span className="ml-2 inline-block ">Submit</span>
        </Button>
      </div>
    </form>
  );
};

export default AddClient;

import React, { useState, useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import {
  getAllClients,
  getEditedId,
  setEditedId,
  onConfirmEditClient,
} from "../../store/clientsSlice";
import SectionTitle from "../common/SectionTitle";
import Button from "../UI/Button";
import Modal from "../UI/Modal";
import ModalActions from "../UI/ModalActions";
import ModalContent from "../UI/ModalContent";
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

const EditClient = ({ onClose }) => {
  const dispatch = useDispatch();
  const editedId = useSelector(getEditedId);
  const clients = useSelector(getAllClients);
  const [clientForm, setClientForm] = useState(emptyForm);
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

  const clientInputFieldHandler = (event, keyName) => {
    const value = event.target.value;

    setClientForm((prev) => {
      return { ...prev, [keyName]: value };
    });
  };

  const imageChangeHandler = useCallback((str) => {
    // setting client form
    setClientForm((prev) => ({ ...prev, image: str }));
  }, []);

  const submitFormHandler = useCallback(
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

      toast.success("Successfully updated!", {
        position: "bottom-center",
        autoClose: 2000,
      });
      dispatch(onConfirmEditClient(clientForm));
      onClose();
      setIsInputTouched(false);
    },
    [validForm, dispatch, clientForm, onClose]
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
    if (editedId !== null) {
      console.log("editing client");
      const isFindIndex = clients.findIndex((client) => client.id === editedId);
      if (isFindIndex !== -1) {
        setClientForm({ ...clients[isFindIndex] });
      }
    }
  }, [editedId, clients]);

  return (
    <Modal onClose={onCloseHandler}>
      <form onSubmit={submitFormHandler}>
        <ModalContent>
          <div className="mt-3 w-full text-center sm:mt-0 sm:ml-4 sm:text-left">
            <SectionTitle>Edit Client</SectionTitle>
            <ClientInputFields
              clientForm={clientForm}
              validForm={validForm}
              onClientInput={clientInputFieldHandler}
              onImageChange={imageChangeHandler}
              isInputTouched={isInputTouched}
            />
          </div>
        </ModalContent>
        <ModalActions>
          <Button type="submit">Confirm</Button>
          <Button outlined={"true"} secondary={"true"} onClick={onCloseHandler}>
            Cancel
          </Button>
        </ModalActions>
      </form>
    </Modal>
  );
};

export default EditClient;

import React, { useState, useCallback, useEffect } from "react";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import SectionTitle from "../common/SectionTitle";
import Button from "../UI/Button";
import Modal from "../UI/Modal";
import ModalActions from "../UI/ModalActions";
import ModalContent from "../UI/ModalContent";
import CompanyInputFields from "./CompanyInputFields";
import { getCompanyData, updateCompanyData } from "../../store/companySlice";

const emptyForm = {
  id: "",
  image: "../../logo512.png",
  companyName: "Digitronic",
  companyEmail: "digitronicdev@gmail.com",
  companyMobile: "03329992075",
  billingAddress: "torwarsak",
};

const CompanyModal = ({ onClose, companyData }) => {
  const dispatch = useDispatch();
  const company = useSelector(getCompanyData);
  const [companyForm, setCompanyForm] = useState(emptyForm);
  const [isInputTouched, setIsInputTouched] = useState(false);

  const [validForm, setValidForm] = useState(
    Object.keys(emptyForm).reduce((a, b) => {
      return { ...a, [b]: false };
    }, {})
  );

  const imageChangeHandler = useCallback((str) => {
    setCompanyForm((prev) => ({ ...prev, image: str }));
  }, []);

  const companyInputFieldHandler = (event, keyName) => {
    const value = event.target.value;
    console.log(value);
    console.log(event);

    setCompanyForm((prev) => {
      return { ...prev, [keyName]: value };
    });
  };

  const submitHandler = useCallback(
    (e) => {
      e.preventDefault();
      setIsInputTouched(true);
      const isValid = Object.keys(validForm).every((key) => validForm[key]);

      if (!isValid) {
        toast.error("Invalid Company Data!", {
          position: "bottom-center",
          autoClose: 2000,
        });
        return;
      }

      toast.success("Company Updated!", {
        position: "bottom-center",
        autoClose: 2000,
      });

      console.log("submitted");
      dispatch(updateCompanyData(companyForm));
      onClose();
      setIsInputTouched(false);
    },
    [onClose, validForm, companyForm, dispatch]
  );

  useEffect(() => {
    if (company) setCompanyForm(company);
  }, [company]);

  useEffect(() => {
    setValidForm((prev) => ({
      id: true,
      image: companyForm.image ? true : false,
      companyName: companyForm.companyName ? true : false,
      companyEmail: companyForm.companyEmail ? true : false,
      companyMobile: companyForm.companyMobile ? true : false,
      billingAddress: companyForm.billingAddress ? true : false,
    }));
  }, [companyForm]);

  return (
    <Modal onClose={onClose}>
      <form onSubmit={submitHandler}>
        <ModalContent>
          <div className="mt-3 w-full text-center sm:mt-0 sm:ml-4 sm:text-left">
            <SectionTitle>
              {companyData ? "Edit company Data" : "Add company data"}
            </SectionTitle>
            <CompanyInputFields
              companyForm={companyForm}
              validForm={validForm}
              onImageChange={imageChangeHandler}
              onCompanyInput={companyInputFieldHandler}
              isInputTouched={isInputTouched}
            />
          </div>
        </ModalContent>
        <ModalActions>
          <Button type="submit">Submit</Button>
          <Button outlined={1} secondary={1} onClick={onClose}>
            Cancel
          </Button>
        </ModalActions>
      </form>
    </Modal>
  );
};

export default CompanyModal;

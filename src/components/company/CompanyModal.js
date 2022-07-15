import React, { useCallback } from "react";
import SectionTitle from "../common/SectionTitle";
import Button from "../UI/Button";
import Modal from "../UI/Modal";
import ModalActions from "../UI/ModalActions";
import ModalContent from "../UI/ModalContent";

const CompanyModal = ({ onClose, company }) => {
  const onCloseHandler = useCallback(() => {
    onClose();
  }, [onClose]);

  return (
    <Modal onClose={onClose}>
      <form>
        <ModalContent>
          <div className="mt-3 w-full text-center sm:mt-0 sm:ml-4 sm:text-left">
            <SectionTitle>Add Company</SectionTitle>
            <p>{company.name}</p>
          </div>
        </ModalContent>
        <ModalActions>
          <Button type="submit">Submit</Button>
          <Button outlined={1} secondary={1} onClick={onCloseHandler}>
            Cancel
          </Button>
        </ModalActions>
      </form>
    </Modal>
  );
};

export default CompanyModal;

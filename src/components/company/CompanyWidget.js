import React, { useCallback, useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage, faPlus } from "@fortawesome/free-solid-svg-icons";
import CompanyModal from "./CompanyModal";

const company = {
  imageUrl: "../../logo512.png",
  name: "Digitronic",
};
const companyData = true;
// const companyData = false;

const CompanyWidget = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModalHandler = () => {
    console.log("closed");
    setIsModalOpen(false);
  };

  const openModalHandler = () => {
    console.log("opened");
    setIsModalOpen(true);
  };

  return (
    <motion.div
      className="flex cursor-pointer items-center rounded-xl bg-blue-50/60 px-2 py-3"
      whileHover={{
        scale: 1.02,
      }}
      whileTap={{ scale: 0.98 }}
      onClick={openModalHandler}
    >
      {!companyData && (
        <>
          <span className="primary-self-text flex h-14 w-14 items-center justify-center overflow-hidden rounded-xl border-2 border-dashed border-blue-300">
            <FontAwesomeIcon className="h-6 w-6 text-blue-300" icon={faImage} />
          </span>
          <span className="flex flex-1 items-center overflow-hidden text-ellipsis whitespace-nowrap py-1 pl-2 font-title font-medium text-slate-400">
            Add Compnay
          </span>
          <span className="flex items-center justify-center pr-4">
            <FontAwesomeIcon className="h-6 w-6 text-blue-400" icon={faPlus} />
          </span>
        </>
      )}
      {companyData && (
        <>
          <img
            className="h-14 w-14 rounded-xl"
            src={company.imageUrl}
            alt="company logo"
          />
          <span className="flex flex-1 items-center overflow-hidden text-ellipsis whitespace-nowrap py-1 pl-2 font-title font-medium text-slate-800">
            {company.name}
          </span>
        </>
      )}
      {isModalOpen && (
        <CompanyModal company={company} onClose={closeModalHandler} />
      )}
    </motion.div>
  );
};

export default CompanyWidget;

import React, { useState } from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage, faPlus, faPen } from "@fortawesome/free-solid-svg-icons";
import CompanyModal from "./CompanyModal";
import { getCompanyData } from "../../store/companySlice";

const CompanyWidget = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const company = useSelector(getCompanyData);

  const companyData = company.image && company.companyName;

  const closeModalHandler = () => {
    setIsModalOpen(false);
  };

  const openModalHandler = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      {isModalOpen && (
        <CompanyModal companyData={companyData} onClose={closeModalHandler} />
      )}
      <motion.div
        className="flex select-none items-center rounded-xl bg-blue-50/60 px-2 py-3"
        whileHover={{
          scale: 1.02,
        }}
        whileTap={{ scale: 0.98 }}
      >
        {!companyData && (
          <>
            <span className="primary-self-text flex h-14 w-14 items-center justify-center overflow-hidden rounded-xl border-2 border-dashed border-blue-300">
              <FontAwesomeIcon
                className="h-6 w-6 text-blue-300"
                icon={faImage}
              />
            </span>
            <span className="flex flex-1 items-center overflow-hidden text-ellipsis whitespace-nowrap py-1 pl-2 font-title font-medium text-slate-400">
              Add Compnay
            </span>
            <button
              className="flex cursor-pointer items-center justify-center p-4"
              onClick={openModalHandler}
            >
              <FontAwesomeIcon
                className="h-6 w-6 text-blue-400"
                icon={faPlus}
              />
            </button>
          </>
        )}
        {companyData && (
          <>
            <img
              className="h-14 w-14 rounded-xl"
              src={company.image}
              alt="company logo"
            />
            <span className="flex flex-1 items-center overflow-hidden text-ellipsis whitespace-nowrap py-1 pl-2 font-title font-medium text-slate-800">
              {company.companyName}
            </span>

            <button
              className="flex cursor-pointer items-center justify-center p-4"
              onClick={openModalHandler}
            >
              <FontAwesomeIcon className="h-6 w-6 text-blue-400" icon={faPen} />
            </button>
          </>
        )}
      </motion.div>
    </>
  );
};

export default CompanyWidget;

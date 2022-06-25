import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faEnvelope,
  faMobile,
} from "@fortawesome/free-solid-svg-icons";

import { defaultSearchStyle } from "../../constants/defaultStyles";

const ClientSearch = ({ searchForm, onSearch }) => {
  return (
    <div className="mb-2 rounded-xl bg-white p-3 shadow-sm">
      <span className="mb-2 font-title">Advanced Search</span>
      <div className="mt-2 flex w-full flex-col sm:flex-row">
        <div className="text-default-color mb-2 flex flex-1 flex-row px-2 font-title sm:mb-0 sm:text-left">
          <div className="mr-3 flex h-10 w-10 items-center justify-center rounded-2xl bg-gray-100">
            <FontAwesomeIcon className="h-6 w-6 text-gray-400" icon={faUser} />
          </div>
          <input
            className={defaultSearchStyle}
            placeholder="Client name"
            value={searchForm.clientName}
            onChange={(e) => onSearch(e, "clientName")}
          />
        </div>
        <div className="text-default-color mb-2 flex flex-1 flex-row px-2 font-title sm:mb-0 sm:text-left">
          <div className="mr-2 flex h-10 w-10 items-center justify-center rounded-2xl bg-gray-100">
            <FontAwesomeIcon
              className="h-6 w-6 text-gray-400"
              icon={faMobile}
            />
          </div>
          <input
            className={defaultSearchStyle}
            placeholder="Client mobile"
            value={searchForm.mobileNo}
            onChange={(e) => onSearch(e, "mobileNo")}
          />
        </div>
        <div className="text-default-color mb-2 flex flex-1 flex-row px-2 font-title sm:mb-0 sm:text-left">
          <div className="mr-2 flex h-10 w-10 items-center justify-center rounded-2xl bg-gray-100">
            <FontAwesomeIcon
              className="h-6 w-6 text-gray-400"
              icon={faEnvelope}
            />
          </div>
          <input
            className={defaultSearchStyle}
            placeholder="Client email"
            value={searchForm.email}
            onChange={(e) => onSearch(e, "email")}
          />
        </div>
      </div>
    </div>
  );
};

export default ClientSearch;

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBoxArchive,
  faClipboardList,
} from "@fortawesome/free-solid-svg-icons";
import { defaultSearchStyle } from "../../constants/defaultStyles";

const ProductSearch = ({ searchForm, onSearch }) => {
  return (
    <div className="mb-3 rounded-xl bg-white px-3 py-3">
      <span className="mb-2 font-title">Advanced Search</span>
      <div className="mt-2 flex w-full flex-col sm:flex-row">
        <div className="text-defaul-color mb-2 flex flex-1 flex-row px-2 font-title sm:mb-0 sm:text-left">
          <div className="mr-3 flex h-10 w-10 items-center justify-center rounded-2xl bg-gray-100">
            <FontAwesomeIcon
              className="h-6 w-6 text-gray-400"
              icon={faClipboardList}
            />
          </div>
          <input
            className={defaultSearchStyle}
            placeholder="Product ID"
            value={searchForm.productID}
            onChange={(e) => onSearch(e, "productID")}
          />
        </div>
        <div className="text-defaul-color mb-2 flex flex-1 flex-row px-2 font-title sm:mb-0 sm:text-left">
          <div className="mr-3 flex h-10 w-10 items-center justify-center rounded-2xl bg-gray-100">
            <FontAwesomeIcon
              className="h-6 w-6 text-gray-400"
              icon={faBoxArchive}
            />
          </div>
          <input
            className={defaultSearchStyle}
            placeholder="Product Name"
            value={searchForm.productName}
            onChange={(e) => onSearch(e, "productName")}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductSearch;
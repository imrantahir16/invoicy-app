import React from "react";

const InvoicListHeader = () => {
  return (
    <div className="invisible hidden w-full flex-col font-semibold sm:visible sm:flex sm:flex-row">
      <div className="text-default-color text-title flex-1 sm:text-left">
        Invoice No
      </div>
      <div className="text-default-color text-title flex-1 sm:text-left">
        Client Name
      </div>
      <div className="text-default-color text-title flex-1 sm:text-left">
        Amount
      </div>
      <div className="text-default-color text-title flex-1 sm:text-left">
        Status
      </div>
      <div className="text-default-color text-title sm:w-11 sm:text-left">
        Action
      </div>
    </div>
  );
};

export default InvoicListHeader;

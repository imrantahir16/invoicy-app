import React from "react";

const ClientListHeader = () => {
  return (
    <div className="invisible hidden w-full flex-col font-semibold sm:visible sm:flex sm:flex-row">
      <div className="text-default-color text-title flex-1 sm:text-left">
        Name
      </div>
      <div className="text-default-color text-title flex-1 sm:text-left">
        Mobile
      </div>
      <div className="text-default-color text-title flex-1 sm:text-left">
        Email
      </div>
      <div className="text-default-color text-title sm:w-11 sm:text-left">
        Action
      </div>
    </div>
  );
};

export default ClientListHeader;

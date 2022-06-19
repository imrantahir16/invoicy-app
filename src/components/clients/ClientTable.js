import React from "react";
import EmptyBar from "../common/EmptyBar";

const ClientTable = () => {
  return (
    <>
      <div className="rounded-xl sm:bg-white sm:p-3">
        <div className="invisible hidden w-full flex-col sm:visible sm:flex sm:flex-row">
          <div className="text-default-color text-title flex-1 sm:text-left">
            Name
          </div>
          <div className="text-default-color text-title flex-1 sm:text-left">
            Mobile
          </div>
          <div className="text-default-color text-title flex-1 sm:text-left">
            Email
          </div>
          <div className="text-default-color text-title flex-1 sm:w-11 sm:text-left">
            Action
          </div>
        </div>
        <div>
          <EmptyBar title="Client Data" />
        </div>
      </div>
    </>
  );
};

export default ClientTable;

import React from "react";
import ClientTable from "../../components/clients/ClientTable";
import AddClient from "../../components/clients/AddClient";
import PageTitle from "../../components/common/PageTitle";

const ClientsPage = () => {
  return (
    <div>
      <div className="p-4">
        <PageTitle title="Clients" />
      </div>
      <div className="flex flex-wrap">
        <div className="mb-4 w-full pl-4 pr-4 sm:mb-1 sm:pl-4 sm:pr-0 lg:w-4/6">
          <ClientTable advanceSearch />
        </div>
        <div className="w-full pl-4 pr-4 sm:pl-4 sm:pr-2 lg:w-2/6">
          <AddClient />
        </div>
      </div>
    </div>
  );
};

export default ClientsPage;

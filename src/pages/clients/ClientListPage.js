import React from "react";
import ClientTable from "../../components/clients/ClientTable";
import QuickAddClient from "../../components/clients/QuickAddClient";
import PageTitle from "../../components/common/PageTitle";

const ClientListPage = () => {
  return (
    <div>
      <div className="p-4">
        <PageTitle title="Clients" />
      </div>
      <div className="flex flex-wrap">
        <div className="mb-4 w-full pl-4 pr-4 sm:mb-1 sm:pl-4 sm:pr-0 lg:w-4/6">
          <ClientTable />
        </div>
        <div className="w-full pl-4 pr-4 sm:pl-4 sm:pr-2 lg:w-2/6">
          <QuickAddClient />
        </div>
      </div>
    </div>
  );
};

export default ClientListPage;

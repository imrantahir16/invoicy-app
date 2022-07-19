import { faFileLines } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import ClientTable from "../components/clients/ClientTable";
import PageTitle from "../components/common/PageTitle";
import DashboardWidgets from "../components/dashboard/DashboardWidgets";
import InvoicesTable from "../components/Invoices/InvoicesTable";
import Button from "../components/UI/Button";

const HomePage = () => {
  return (
    <>
      <div className="p-3">
        <PageTitle title="Dashboard" />
      </div>
      <div className="flex flex-wrap">
        <div className="mb-4 w-full pl-4 pr-4 sm:mb-1 sm:pr-0 lg:w-4/6">
          <DashboardWidgets />
          <div className="mt-2">
            <InvoicesTable />
          </div>
          <div className="mt-2">
            <ClientTable itemsPerPage={3} />
          </div>
        </div>
        <div className="w-full pl-4 pr-4 sm:mb-1 sm:pr-2 lg:w-2/6">
          <Button onClick={() => {}} block={1}>
            <FontAwesomeIcon icon={faFileLines} />
            <span className="ml-2 inline-block">Add New Invoice</span>
          </Button>
        </div>
      </div>
    </>
  );
};

export default HomePage;

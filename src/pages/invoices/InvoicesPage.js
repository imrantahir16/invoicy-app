import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileLines } from "@fortawesome/free-solid-svg-icons";
import PageTitle from "../../components/common/PageTitle";
import Button from "../../components/UI/Button";
import InvoicesTable from "../../components/Invoices/InvoicesTable";

const InvoicesPage = () => {
  const navigate = useNavigate();
  const newInvoiceHandler = useCallback(() => {
    navigate("/invoices/new");
  }, [navigate]);
  return (
    <>
      <div className="flex flex-col flex-wrap items-center justify-between p-4 sm:flex-row">
        <div className="sm:mr-4">
          <PageTitle title="Invoices" />
        </div>
        <div>
          <Button onClick={newInvoiceHandler} block={"true"}>
            <FontAwesomeIcon icon={faFileLines} />
            <span className="ml-4 inline-block">+ New</span>
          </Button>
        </div>
      </div>
      <div className="flex flex-wrap">
        <div className="mb-4 w-full px-4 sm:mb-1">
          <InvoicesTable advanceSearch />
        </div>
      </div>
    </>
  );
};

export default InvoicesPage;

import React from "react";
import InvoiceSearch from "./InvoiceSearch";
import InvoicesList from "./InvoicesList";
import InvoiceListHeader from "./InvoicListHeader";
const INVOICE_DUMMY = [
  {
    id: "abc",
    invoiceNo: "001",
    clientName: "Imran",
    totalAmount: 120.5,
    status: "draft",
  },
  {
    id: "def",
    invoiceNo: "002",
    clientName: "Imran tahir",
    totalAmount: 1500.5,
    status: "unPaid",
  },
  {
    id: "ghi",
    invoiceNo: "003",
    clientName: "Zahid",
    totalAmount: 12.5,
    status: "Paid",
  },
];
const InvoicesTable = ({ advanceSearch }) => {
  return (
    <>
      {advanceSearch && <InvoiceSearch searchForm={{}} onSearch={() => {}} />}
      <div className="rounded-xl shadow-sm dark:bg-slate-900 sm:bg-white sm:p-3">
        <InvoiceListHeader />
        <ul className="mt-2">
          {INVOICE_DUMMY.map((invoice) => {
            return (
              <InvoicesList
                key={invoice.id}
                invoice={invoice}
                onEdit={() => {}}
                onDelete={() => {}}
              />
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default InvoicesTable;

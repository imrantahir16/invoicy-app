import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faEllipsis,
  faTrashCan,
  faPen,
} from "@fortawesome/free-solid-svg-icons";
import { Menu, MenuItem, MenuButton } from "@szhsin/react-menu";

import {
  defaultTdWrapperStyle,
  defaultTdStyle,
  defaultTdContentTitleStyle,
  defaultTdContent,
  defaultTdActionStyle,
} from "../../constants/defaultStyles";

const InvoicesList = ({ invoice, onEdit, onDelete }) => {
  return (
    <li className={defaultTdWrapperStyle}>
      <div className={defaultTdStyle}>
        <div className={defaultTdContentTitleStyle}>Invoice No</div>
        <div className={defaultTdContent}>
          <span className="cursor-pointer overflow-hidden text-ellipsis whitespace-nowrap text-blue-400">
            {invoice.invoiceNo}
          </span>
        </div>
      </div>
      <div className={defaultTdStyle}>
        <div className={defaultTdContentTitleStyle}>Client Name</div>
        <div className={defaultTdContent}>
          <span className="overflow-hidden text-ellipsis whitespace-nowrap">
            {invoice.clientName}
          </span>
        </div>
      </div>
      <div className={defaultTdStyle}>
        <div className={defaultTdContentTitleStyle}>Amount</div>
        <div className={defaultTdContent}>
          <span className="overflow-hidden text-ellipsis whitespace-nowrap">
            {invoice.totalAmount}
          </span>
        </div>
      </div>
      <div className={defaultTdStyle}>
        <div className={defaultTdContentTitleStyle}>Status</div>
        <div className={defaultTdContent}>
          <span
            className={`overflow-hidden text-ellipsis whitespace-nowrap rounded-xl px-3 py-1 ${
              invoice.status === "unPaid"
                ? "bg-red-100 text-red-500"
                : invoice.status === "Paid"
                ? "bg-green-100 text-green-500"
                : "bg-gray-100 text-gray-600"
            }`}
          >
            {invoice.status}
          </span>
        </div>
      </div>
      <div className={defaultTdActionStyle}>
        <div className={defaultTdContentTitleStyle}>Action</div>
        <div className={defaultTdContent}>
          <Menu
            menuButton={
              <MenuButton>
                <div className="rounded-xl bg-gray-50 px-2 focus:outline-none focus:ring focus:ring-blue-400">
                  <FontAwesomeIcon
                    className="h-6 w-6 text-blue-500"
                    icon={faEllipsis}
                  />
                </div>
              </MenuButton>
            }
            transition
          >
            <MenuItem onClick={() => onEdit(invoice)}>
              <FontAwesomeIcon className="h-4 w-4 text-blue-400" icon={faPen} />
              <span className="ml-2">Details</span>
            </MenuItem>
            <MenuItem onClick={() => onDelete(invoice)}>
              <FontAwesomeIcon
                className="h-4 w-4 text-red-400"
                icon={faTrashCan}
              />
              <span className="ml-2">Delete</span>
            </MenuItem>
          </Menu>
        </div>
      </div>
    </li>
  );
};

export default InvoicesList;

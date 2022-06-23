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

const ClientList = ({ client, onEdit, onDelete }) => {
  const { image, clientName, email, mobileNo } = client;
  return (
    <div className={defaultTdWrapperStyle}>
      <div className={defaultTdStyle}>
        <div className={defaultTdContentTitleStyle}>Name</div>
        <div className={defaultTdContent}>
          {image ? (
            <img
              className="h-10 w-10 rounded-2xl object-cover"
              src={image}
              alt={clientName}
            />
          ) : (
            <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gray-100">
              <FontAwesomeIcon
                className="h-6 w-6 text-gray-400"
                icon={faUser}
              />
            </span>
          )}
          <span className="overflow-hidden text-ellipsis whitespace-nowrap pl-1">
            {clientName}
          </span>
        </div>
      </div>
      <div className={defaultTdStyle}>
        <div className={defaultTdContentTitleStyle}>Mobile</div>
        <div className={defaultTdContent}>
          <span className="overflow-hidden text-ellipsis whitespace-nowrap">
            {mobileNo}
          </span>
        </div>
      </div>
      <div className={defaultTdStyle}>
        <div className={defaultTdContentTitleStyle}>Email</div>
        <div className={defaultTdContent}>
          <span className="overflow-hidden text-ellipsis whitespace-nowrap">
            {email}
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
            <MenuItem onClick={() => onEdit(client)}>
              <FontAwesomeIcon className="h-4 w-4 text-blue-400" icon={faPen} />
              <span className="ml-2">Edit</span>
            </MenuItem>
            <MenuItem onClick={() => onDelete(client)}>
              <FontAwesomeIcon
                className="h-4 w-4 text-red-400"
                icon={faTrashCan}
              />
              <span className="ml-2">Delete</span>
            </MenuItem>
          </Menu>
        </div>
      </div>
    </div>
  );
};

export default ClientList;

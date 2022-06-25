import React, { useCallback, useEffect, useState } from "react";
import EmptyBar from "../common/EmptyBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faEnvelope,
  faMobile,
} from "@fortawesome/free-solid-svg-icons";
import { defaultSearchStyle } from "../../constants/defaultStyles";
import Paginator from "../common/Paginator";
import ClientList from "./ClientList";

const itemsPerPage = 1;
const CLIENT_ITEM = [
  {
    id: "123",
    clientName: "imran",
    email: "test@test.com",
    mobileNo: "03329992075",
  },
  {
    id: "456",
    clientName: "imran2",
    email: "test2@test.com",
    mobileNo: "03329992475",
  },
  {
    id: "789",
    clientName: "imran3",
    email: "test3@test.com",
    mobileNo: "03329993075",
  },
  {
    id: "aasd3",
    clientName: "imran4",
    email: "test4@test.com",
    mobileNo: "03329994075",
  },
  {
    id: "123asdas",
    clientName: "imran5",
    email: "test5@test.com",
    mobileNo: "03329992076",
  },
];
const emptySearchForm = {
  clientName: "",
  email: "",
  mobileNo: "",
};
const ClientTable = (advanceSearch = false) => {
  const [searchForm, setSearchForm] = useState(emptySearchForm);

  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  const pageChangehandler = (event) => {
    const newOffset = (event.selected * itemsPerPage) % CLIENT_ITEM.length;
    setItemOffset(newOffset);
  };
  const searchValuehandler = useCallback((e, keyName) => {
    const value = e.target.value;

    setSearchForm((prev) => {
      return { ...prev, [keyName]: value };
    });
  }, []);

  const onEditClientHandler = useCallback((item) => {
    //will edit client based on its it
    console.log("Edited client " + item.id);
  });
  const onDeleteClientHandler = useCallback((item) => {
    //will delete client based on its it
    console.log("Deleted client" + item.id);
  });

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setPageCount(Math.ceil(CLIENT_ITEM.length / itemsPerPage));
  }, [itemOffset]);
  return (
    <>
      {advanceSearch && (
        <div className="mb-2 rounded-xl bg-white p-3 shadow-sm">
          <span className="mb-2 font-title">Advanced Search</span>
          <div className="flex w-full flex-col sm:flex-row">
            <div className="text-default-color mb-2 flex flex-1 flex-row px-2 font-title sm:mb-0 sm:text-left">
              <div className="mr-2 flex h-12 w-12 items-center justify-center rounded-2xl bg-gray-100">
                <FontAwesomeIcon
                  className="h-6 w-6 text-gray-400"
                  icon={faUser}
                />
              </div>
              <input
                className={defaultSearchStyle}
                placeholder="Client name"
                value={searchForm.clientName}
                onChange={(e) => searchValuehandler(e, "clientName")}
              />
            </div>
            <div className="text-default-color mb-2 flex flex-1 flex-row px-2 font-title sm:mb-0 sm:text-left">
              <div className="mr-2 flex h-12 w-12 items-center justify-center rounded-2xl bg-gray-100">
                <FontAwesomeIcon
                  className="h-6 w-6 text-gray-400"
                  icon={faEnvelope}
                />
              </div>
              <input
                className={defaultSearchStyle}
                placeholder="Client email"
                value={searchForm.email}
                onChange={(e) => searchValuehandler(e, "email")}
              />
            </div>
            <div className="text-default-color mb-2 flex flex-1 flex-row px-2 font-title sm:mb-0 sm:text-left">
              <div className="mr-2 flex h-12 w-12 items-center justify-center rounded-2xl bg-gray-100">
                <FontAwesomeIcon
                  className="h-6 w-6 text-gray-400"
                  icon={faMobile}
                />
              </div>
              <input
                className={defaultSearchStyle}
                placeholder="Client mobile"
                value={searchForm.mobileNo}
                onChange={(e) => searchValuehandler(e, "mobileNo")}
              />
            </div>
          </div>
        </div>
      )}
      <div className="rounded-xl shadow-sm sm:bg-white sm:p-3">
        <div className="invisible hidden w-full flex-col sm:visible sm:flex sm:flex-row">
          <div className="text-default-color text-title flex-1 sm:text-left">
            Namep
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
        <div>
          {CLIENT_ITEM.map((client) => {
            return (
              <ClientList
                key={client.id}
                client={client}
                onEdit={onEditClientHandler}
                onDelete={onDeleteClientHandler}
              />
            );
          })}
          {CLIENT_ITEM.length <= 0 && <EmptyBar title="Client Data" />}
          {CLIENT_ITEM.length > itemsPerPage && (
            <Paginator onPageChange={pageChangehandler} pageCount={pageCount} />
          )}
        </div>
      </div>
    </>
  );
};

export default ClientTable;

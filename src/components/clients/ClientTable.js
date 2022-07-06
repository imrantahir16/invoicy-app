import React, { useCallback, useEffect, useState, useMemo } from "react";
import EmptyBar from "../common/EmptyBar";
import Paginator from "../common/Paginator";
import ClientList from "./ClientList";
import ClientListHeader from "./ClientListHeader";
import ClientSearch from "./ClientSearch";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllClients,
  setDeletedId,
  setEditedId,
} from "../../store/clientsSlice";
import EditClient from "./EditClient";
import DeleteClient from "./DeleteClient";

const itemsPerPage = 10;
// later need to add real client data instead of this dummy data
// const CLIENT_ITEM = [
//   {
//     id: "123",
//     clientName: "imran",
//     email: "test@test.com",
//     mobileNo: "03329992075",
//   },
//   {
//     id: "456",
//     clientName: "imran2",
//     email: "test2@test.com",
//     mobileNo: "03329992475",
//   },
//   {
//     id: "789",
//     clientName: "imran3",
//     email: "test3@test.com",
//     mobileNo: "03329993075",
//   },
//   {
//     id: "aasd3",
//     clientName: "imran4",
//     email: "test4@test.com",
//     mobileNo: "03329994075",
//   },
//   {
//     id: "123asdas",
//     clientName: "imran5",
//     email: "test5@test.com",
//     mobileNo: "03329992076",
//   },
//   {
//     id: "dfsfd",
//     clientName: "imran25",
//     email: "tessst5@test.com",
//     mobileNo: "03329992676",
//   },
//   {
//     id: "123dsfasdas",
//     clientName: "imran65",
//     email: "tessst5@test.com",
//     mobileNo: "03329392076",
//   },
//   {
//     id: "123sdfasdas",
//     clientName: "fazal",
//     email: "sasa@test.com",
//     mobileNo: "03329292076",
//   },
//   {
//     id: "rrert",
//     clientName: "imranerwq5",
//     email: "teewrst5@test.com",
//     mobileNo: "03339992076",
//   },
//   {
//     id: "123asweerdas",
//     clientName: "imraner5",
//     email: "tereqwst5@test.com",
//     mobileNo: "03326992076",
//   },
//   {
//     id: "123asdadsdfs",
//     clientName: "imran655",
//     email: "test5@test.com",
//     mobileNo: "03329992076",
//   },
// ];

const emptySearchForm = {
  clientName: "",
  email: "",
  mobileNo: "",
};
const ClientTable = ({ advanceSearch = false }) => {
  const dispatch = useDispatch();
  const allClients = useSelector(getAllClients);
  const [searchForm, setSearchForm] = useState(emptySearchForm);
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const pageChangehandler = (event) => {
    const newOffset = (event.selected * itemsPerPage) % clients.length;
    setItemOffset(newOffset);
  };
  const searchValuehandler = useCallback((e, keyName) => {
    const value = e.target.value;

    setSearchForm((prev) => {
      return { ...prev, [keyName]: value };
    });

    setItemOffset(0);
  }, []);

  const clients = useMemo(() => {
    let filteredClient = allClients.length > 0 ? [...allClients].reverse() : [];
    if (searchForm.clientName?.trim()) {
      filteredClient = filteredClient.filter((client) =>
        client.clientName.includes(searchForm.clientName)
      );
    }

    if (searchForm.email?.trim()) {
      filteredClient = filteredClient.filter((client) =>
        client.email.includes(searchForm.email)
      );
    }
    if (searchForm.mobileNo?.trim()) {
      filteredClient = filteredClient.filter((client) =>
        client.mobileNo.includes(searchForm.mobileNo)
      );
    }

    return filteredClient;
  }, [searchForm, allClients]);

  const onEditClientHandler = useCallback(
    (item) => {
      //will edit client based on its it
      dispatch(setEditedId(item.id));
      setIsEditModalOpen(true);
    },
    [dispatch]
  );
  const onDeleteClientHandler = useCallback(
    (item) => {
      //will delete client based on its it
      dispatch(setDeletedId(item.id));
      setIsDeleteModalOpen(true);
    },
    [dispatch]
  );

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(clients.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(clients.length / itemsPerPage));
  }, [itemOffset, clients]);

  return (
    <>
      {advanceSearch && (
        <ClientSearch searchForm={searchForm} onSearch={searchValuehandler} />
      )}

      <div className="rounded-xl shadow-sm dark:bg-slate-900 sm:bg-white sm:p-3">
        <ClientListHeader />
        <ul className="mt-2">
          {currentItems &&
            currentItems.map((client) => {
              return (
                <ClientList
                  key={client.id}
                  client={client}
                  onEdit={onEditClientHandler}
                  onDelete={onDeleteClientHandler}
                />
              );
            })}
        </ul>
        {isEditModalOpen && (
          <EditClient onClose={() => setIsEditModalOpen(false)} />
        )}
        {isDeleteModalOpen && (
          <DeleteClient onClose={() => setIsDeleteModalOpen(false)} />
        )}
        {clients.length <= 0 && <EmptyBar title="Client Data" />}
        {clients.length > itemsPerPage && (
          <Paginator onPageChange={pageChangehandler} pageCount={pageCount} />
        )}
      </div>
    </>
  );
};

export default ClientTable;

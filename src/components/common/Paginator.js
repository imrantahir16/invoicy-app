import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faEllipsis,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";
import ReactPaginate from "react-paginate";

const Paginator = (props) => {
  return (
    <ReactPaginate
      className="mt-2 flex items-center justify-center -space-x-px"
      previousLinkClassName="py-2 px-3 ml-0 leading-tight text-sky-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-slate-700 dark:border-gray-700 dark:text-sky-500 dark:hover:bg-gray-700 dark:hover:text-white"
      nextLinkClassName="py-2 px-3 ml-0 leading-tight text-sky-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-slate-700 dark:border-gray-700 dark:text-sky-500 dark:hover:bg-gray-700 dark:hover:text-white"
      pageLinkClassName="py-2 px-3 ml-0 leading-tight text-sky-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-slate-700 dark:border-gray-700 dark:text-sky-500 dark:hover:bg-gray-700 dark:hover:text-white"
      breakLinkClassName="py-2 px-3 ml-0 leading-tight text-sky-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-slate-700 dark:border-gray-700 dark:text-sky-500 dark:hover:bg-gray-700 dark:hover:text-white"
      activeLinkClassName="py-2 px-3 text-blue-600 bg-blue-50 border border-gray-300 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
      breakLabel={<FontAwesomeIcon icon={faEllipsis} />}
      onPageChange={props.onPageChange}
      pageRangeDisplayed={1}
      pageCount={props.pageCount}
      previousLabel={<FontAwesomeIcon icon={faAngleLeft} />}
      nextLabel={<FontAwesomeIcon icon={faAngleRight} />}
      renderOnZeroPageCount={null}
    />
  );
};

export default Paginator;

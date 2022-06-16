import React from "react";
import LoadingSpinner from "../UI/LoadingSpinner";

const PageLoading = () => {
  return (
    <div className="w-full h-full fixed top-0 left-0 z-50 flex flex-col justify-center items-center">
      <div className="w-full h-full absolute inset-0 bg-white opacity-50"></div>
      <span className="bg-white inline-block py-6 px-12 rounded-xl border border-gray-200 relative font-title">
        <LoadingSpinner />
        <span className="inline-block pt-4 text-xl">Loading</span>
      </span>
    </div>
  );
};

export default PageLoading;

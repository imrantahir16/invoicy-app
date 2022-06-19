import React from "react";
import LoadingSpinner from "../UI/LoadingSpinner";

const PageLoading = () => {
  return (
    <div className="fixed top-0 left-0 z-50 flex h-full w-full flex-col items-center justify-center">
      <div className="absolute inset-0 h-full w-full bg-black opacity-40 "></div>
      <span className="relative inline-block rounded-xl border border-gray-200 bg-white py-6 px-12 font-title">
        <LoadingSpinner />
        <span className="inline-block pt-4 text-xl">Loading</span>
      </span>
    </div>
  );
};

export default PageLoading;

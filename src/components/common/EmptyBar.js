import React from "react";
import EmptyBarIcon from "../Icons/EmpatybarIcon";

const EmptyBar = ({ title = "Data" }) => {
  return (
    <div className="mt-4 flex flex-col items-center justify-center rounded-2xl bg-white font-title text-gray-500">
      <EmptyBarIcon className="mb-2 h-12" />
      Empty {title}
    </div>
  );
};

export default EmptyBar;

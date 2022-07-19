import React from "react";

const DashboardCard = ({ title, icon, value }) => {
  return (
    <div className="mb-3 w-full md:w-1/2">
      <div className="rounded-xl bg-white p-4 hover:shadow-sm dark:bg-slate-900 md:mr-4">
        <h3 className="font-title">{title}</h3>
        <div className="flex items-center justify-between">
          <div>{icon}</div>
          <div className="mr-2 text-2xl">{value}</div>
        </div>
      </div>
    </div>
  );
};

export default DashboardCard;

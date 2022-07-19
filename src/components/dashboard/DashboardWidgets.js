import React from "react";
import { useSelector } from "react-redux";
import DashboardCard from "./DashboardCard";
import LottieIcon from "../LottieIcons/LottieIcon";
import { getAllClients } from "../../store/clientsSlice";
import { getAllProducts } from "../../store/productsSlice";
import moneyIcon from "../../lottiesJson/lottie-money.json";
import invoicesIcon from "../../lottiesJson/invoice-paper.json";
import clientsIcon from "../../lottiesJson/lottie-persons.json";
import productsIcon from "../../lottiesJson/lottie-product.json";

const DashboardWidgets = () => {
  const clients = useSelector(getAllClients);
  const products = useSelector(getAllProducts);

  return (
    <div className="flex flex-wrap">
      <DashboardCard
        title="Total Balance"
        icon={<LottieIcon jsonData={moneyIcon} loop className="h-20" />}
        value={"2000"}
      />
      <DashboardCard
        title="Total CLients"
        icon={<LottieIcon jsonData={clientsIcon} loop className="h-20" />}
        value={clients?.length}
      />
      <DashboardCard
        title="Total Product"
        icon={<LottieIcon jsonData={productsIcon} loop className="h-20" />}
        value={products?.length}
      />
      <DashboardCard
        title="Total Invoices"
        icon={<LottieIcon jsonData={invoicesIcon} loop className="h-20" />}
        value={"50"}
      />
    </div>
  );
};

export default DashboardWidgets;

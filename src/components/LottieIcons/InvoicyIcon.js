import React from "react";
import invoicyIcon from "../../lottiesJson/new-invoice.json";
import Lottie from "lottie-react";

const InvoicyIcon = (props) => {
  return <Lottie animationData={invoicyIcon} {...props} />;
};

export default InvoicyIcon;

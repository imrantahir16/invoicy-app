import React from "react";
import invoicyIcon from "../../lotties/invoicy-icon.json";
import Lottie from "lottie-react";

const InvoicyIcon = (props) => {
  return <Lottie animationData={invoicyIcon} {...props} />;
};

export default InvoicyIcon;

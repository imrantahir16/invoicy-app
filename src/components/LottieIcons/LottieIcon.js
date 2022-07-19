import React from "react";
import Lottie from "lottie-react";
const LottieIcon = (props) => {
  return <Lottie animationData={props.jsonData} {...props} />;
};

export default LottieIcon;

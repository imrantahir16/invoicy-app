import React, { useCallback } from "react";
import ImageUpload from "../common/ImageUpload";
import SectionTitle from "../common/SectionTitle";

const QuickAddClient = () => {
  const OnchangeImageHandler = useCallback((str) => {
    // setting client form
    // dispatching client form field of image
    console.log(str);
  }, []);

  return (
    <div className="rounded-xl bg-green-400 p-4">
      <SectionTitle>Add Quick Client</SectionTitle>
      <ImageUpload onChangeImage={OnchangeImageHandler} />
    </div>
  );
};

export default QuickAddClient;

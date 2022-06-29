import React from "react";

const ProductListHeader = () => {
  return (
    <div className="invisible hidden w-full flex-col font-semibold sm:visible sm:flex sm:flex-row">
      <div className="text-default-color text-title flex-1 sm:text-left">
        Product ID
      </div>
      <div className="text-default-color text-title flex-1 sm:text-left">
        Product Name
      </div>
      <div className="text-default-color text-title flex-1 sm:text-left">
        Price
      </div>
      <div className="text-default-color text-title flex-1 sm:text-left">
        Quantity
      </div>
      <div className="text-default-color text-title sm:w-11 sm:text-left">
        Action
      </div>
    </div>
  );
};

export default ProductListHeader;

import React from "react";
import PageTitle from "../../components/common/PageTitle";
import ProductTable from "../../components/products/ProductTable";
import Button from "../../components/UI/Button";

const ProductListPage = () => {
  return (
    <>
      <div className="p-4">
        <PageTitle title="Products" />
      </div>
      <div className="flex flex-wrap">
        <div className="mb-4 w-full pl-4 pr-4 sm:mb-1 sm:pl-4 sm:pr-0 lg:w-4/6">
          <ProductTable advanceSearch />
        </div>
      </div>
    </>
  );
};

export default ProductListPage;

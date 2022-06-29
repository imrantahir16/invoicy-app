import React from "react";
import PageTitle from "../../components/common/PageTitle";
import AddProduct from "../../components/products/AddProduct";
import ProductTable from "../../components/products/ProductTable";

const ProductsPage = () => {
  return (
    <>
      <div className="p-4">
        <PageTitle title="Products" />
      </div>
      <div className="flex flex-wrap">
        <div className="mb-4 w-full pl-4 pr-4 sm:mb-1 sm:pl-4 sm:pr-0 lg:w-4/6">
          <ProductTable advanceSearch />
        </div>
        <div className="w-full pl-4 pr-4 sm:pl-4 sm:pr-2 lg:w-2/6">
          <AddProduct />
        </div>
      </div>
    </>
  );
};

export default ProductsPage;

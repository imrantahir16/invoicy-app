import React, { useState, useEffect, useCallback, useMemo } from "react";
import ProductList from "./ProductList";
import ProductListHeader from "./ProductListHeader";
import ProductSearch from "./ProductSearch";
import Paginator from "../common/Paginator";
import EmptyBar from "../common/EmptyBar";

const itemsPerPage = 2;

const PRODUCT_LIST = [
  {
    id: "123",
    productID: "123",
    productName: "lays",
    amount: 20,
    quantity: 200,
  },
  {
    id: "231",
    productID: "231",
    productName: "Badam",
    amount: 2000,
    quantity: 20,
  },
  {
    id: "1236",
    productID: "1236",
    productName: "Sun Glass",
    amount: 350,
    quantity: 2,
  },
  {
    id: "1234",
    productID: "1234",
    productName: "Red n White",
    amount: 100,
    quantity: 20,
  },
  {
    id: "12345",
    productID: "12345",
    productName: "Nestle juice",
    amount: 200,
    quantity: 20,
  },
];

const emptySearchForm = {
  productID: "",
  productName: "",
};
const ProductTable = ({ advanceSearch = false }) => {
  const [searchForm, setSearchForm] = useState(emptySearchForm);
  const allProducts = [...PRODUCT_LIST];
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  const pageChangehandler = (event) => {
    const newOffset = (event.selected * itemsPerPage) % products.length;
    setItemOffset(newOffset);
  };

  const searchValueHandler = useCallback((e, keyName) => {
    const value = e.target.value;

    setSearchForm((prev) => {
      return { ...prev, [keyName]: value };
    });

    setItemOffset(0);
  }, []);

  const products = useMemo(() => {
    let filteredProducts =
      allProducts.length > 0 ? [...allProducts].reverse() : [];
    if (searchForm.productID?.trim()) {
      filteredProducts = filteredProducts.filter((product) =>
        product.productID.includes(searchForm.productID)
      );
    }

    if (searchForm.productName?.trim()) {
      filteredProducts = filteredProducts.filter((product) =>
        product.productName.includes(searchForm.productName)
      );
    }

    return filteredProducts;
  }, [searchForm, allProducts]);

  const onEditClientHandler = useCallback((item) => {
    //will edit client based on its it
    console.log("Edited client " + item.id);
  });
  const onDeleteClientHandler = useCallback((item) => {
    //will delete client based on its it
    console.log("Deleted client" + item.id);
  });

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(products.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(products.length / itemsPerPage));
  }, [itemOffset]);

  return (
    <>
      {advanceSearch && (
        <ProductSearch searchForm={searchForm} onSearch={searchValueHandler} />
      )}
      <div className="rounded-xl shadow-sm sm:bg-white sm:p-3">
        <ProductListHeader />
        <ul className="mt-2">
          {currentItems &&
            currentItems.map((product) => {
              return (
                <ProductList
                  key={product.id}
                  product={product}
                  onEdit={onEditClientHandler}
                  onDelete={onDeleteClientHandler}
                />
              );
            })}
        </ul>
        {products.length <= 0 && <EmptyBar title="Product Data" />}
        {products.length > itemsPerPage && (
          <Paginator onPageChange={pageChangehandler} pageCount={pageCount} />
        )}
      </div>
    </>
  );
};

export default ProductTable;

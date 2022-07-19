import React, { useState, useEffect, useCallback, useMemo } from "react";
import ProductList from "./ProductList";
import ProductListHeader from "./ProductListHeader";
import ProductSearch from "./ProductSearch";
import Paginator from "../common/Paginator";
import EmptyBar from "../common/EmptyBar";
import { useDispatch, useSelector } from "react-redux";
import {
  setEditedId,
  setDeletedId,
  getAllProducts,
} from "../../store/productsSlice";
import EditProduct from "./EditProduct";
import DeleteProduct from "./DeleteProduct";

const emptySearchForm = {
  productID: "",
  productName: "",
};
const ProductTable = ({ advanceSearch = false, itemsPerPage = 10 }) => {
  const dispatch = useDispatch();
  const allProducts = useSelector(getAllProducts);
  const [searchForm, setSearchForm] = useState(emptySearchForm);
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

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

  const onEditProductHandler = useCallback(
    (item) => {
      dispatch(setEditedId(item.id));
      setIsEditModalOpen(true);
      console.log("editing-started");
    },
    [dispatch]
  );
  const onDeleteProductHandler = useCallback(
    (item) => {
      dispatch(setDeletedId(item.id));
      setIsDeleteModalOpen(true);
      console.log("deleting started");
    },
    [dispatch]
  );

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(products.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(products.length / itemsPerPage));
  }, [itemOffset, products, itemsPerPage]);

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
                  onEdit={onEditProductHandler}
                  onDelete={onDeleteProductHandler}
                />
              );
            })}
        </ul>
        {isEditModalOpen && (
          <EditProduct onClose={() => setIsEditModalOpen(false)} />
        )}
        {isDeleteModalOpen && (
          <DeleteProduct onClose={() => setIsDeleteModalOpen(false)} />
        )}
        {products.length <= 0 && <EmptyBar title="Product Data" />}
        {products.length > itemsPerPage && (
          <Paginator onPageChange={pageChangehandler} pageCount={pageCount} />
        )}
      </div>
    </>
  );
};

export default ProductTable;

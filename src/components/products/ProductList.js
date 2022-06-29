import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBoxArchive,
  faEllipsis,
  faTrashCan,
  faPen,
} from "@fortawesome/free-solid-svg-icons";
import { Menu, MenuItem, MenuButton } from "@szhsin/react-menu";
import {
  defaultTdWrapperStyle,
  defaultTdStyle,
  defaultTdContentTitleStyle,
  defaultTdContent,
  defaultTdActionStyle,
} from "../../constants/defaultStyles";

const ProductList = ({ product, onEdit, onDelete }) => {
  const { productID, image, productName, price, quantity } = product;
  return (
    <li className={defaultTdWrapperStyle}>
      <div className={defaultTdStyle}>
        <div className={defaultTdContentTitleStyle}>Product ID</div>
        <div className={defaultTdContent}>
          {image ? (
            <img
              className="mr-2 h-10 w-10 rounded-2xl object-cover"
              src={image}
              alt={productName}
            />
          ) : (
            <span className="mr-2 flex h-10 w-10 items-center justify-center rounded-2xl bg-gray-100">
              <FontAwesomeIcon
                className="h-6 w-6 text-gray-400"
                icon={faBoxArchive}
              />
            </span>
          )}
          <span className="overflow-hidden text-ellipsis whitespace-nowrap pl-1">
            {productID}
          </span>
        </div>
      </div>
      <div className={defaultTdStyle}>
        <div className={defaultTdContentTitleStyle}>Product name</div>
        <div className={defaultTdContent}>
          <span className="overflow-hidden text-ellipsis whitespace-nowrap">
            {productName}
          </span>
        </div>
      </div>
      <div className={defaultTdStyle}>
        <div className={defaultTdContentTitleStyle}>Price</div>
        <div className={defaultTdContent}>
          <span className="overflow-hidden text-ellipsis whitespace-nowrap">
            {price}
          </span>
        </div>
      </div>
      <div className={defaultTdStyle}>
        <div className={defaultTdContentTitleStyle}>Quantity</div>
        <div className={defaultTdContent}>
          <span className="overflow-hidden text-ellipsis whitespace-nowrap">
            {quantity}
          </span>
        </div>
      </div>
      <div className={defaultTdActionStyle}>
        <div className={defaultTdContentTitleStyle}>Action</div>
        <div className={defaultTdContent}>
          <Menu
            menuButton={
              <MenuButton>
                <div className="rounded-xl bg-gray-50 px-2 focus:outline-none focus:ring focus:ring-blue-400">
                  <FontAwesomeIcon
                    className="h-6 w-6 text-blue-500"
                    icon={faEllipsis}
                  />
                </div>
              </MenuButton>
            }
            transition
          >
            <MenuItem onClick={() => onEdit(product)}>
              <FontAwesomeIcon className="h-4 w-4 text-blue-400" icon={faPen} />
              <span className="ml-2">Edit</span>
            </MenuItem>
            <MenuItem onClick={() => onDelete(product)}>
              <FontAwesomeIcon
                className="h-4 w-4 text-red-400"
                icon={faTrashCan}
              />
              <span className="ml-2">Delete</span>
            </MenuItem>
          </Menu>
        </div>
      </div>
    </li>
  );
};

export default ProductList;

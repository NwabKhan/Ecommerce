import React from "react";

import { NavLink } from "react-router-dom";
import FormatPrice from "./FormatPrice";
import { useDispatch } from "react-redux";
import { setAllProducts } from "../../redux/products/productSlice";
const Product = (data) => {
  const dispatch = useDispatch();
  const { ID, name, imageUrls, regularPrice, brand, admin } = data;
  const editProduct = (event) => {
    event.preventDefault();
    event.stopPropagation();
    alert("Edit");
  };
  const deleteProduct = async (event) => {
    event.stopPropagation();
    event.preventDefault();
    if (
      window.confirm(
        "Are you sure you wish to delete this item?\nThis action can't be undo"
      )
    ) {
      const res = await fetch(
        `${process.env.REACT_APP_API_URL}delete-product`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ID,
          }),
        }
      );
      const data = await res.json();
      dispatch(setAllProducts(data));
    }
  };
  return (
    <div>
      <NavLink to={`/singleproduct/${ID}`}>
        <div className="card">
          <figure>
            <img src={imageUrls[0]} alt={name} />
            <figcaption className="caption">{brand}</figcaption>
            {admin && (
              <div>
                <button onClick={editProduct} className="edit">
                  Edit
                </button>
                <button onClick={deleteProduct} className="delete">
                  Delete
                </button>
              </div>
            )}
          </figure>

          <div className="card-data">
            <div className="card-data-flex">
              <h3>{name}</h3>
              <p className="card-data-price">
                <FormatPrice price={regularPrice} />
              </p>
            </div>
          </div>
        </div>
      </NavLink>
    </div>
  );
};

export default Product;

import React from "react";

import { NavLink } from "react-router-dom";
import FormatPrice from "./FormatPrice";
const Product = (data) => {
  const { ID, name, imageUrls, regularPrice, brand, admin } = data;

  return (
    <div>
      <NavLink to={`/singleproduct/${ID}`}>
        <div className="card">
          <figure>
            <img src={imageUrls[0]} alt={name} />
            <figcaption className="caption">{brand}</figcaption>
            <button onClick={()=>alert("Editing:")} className="edit">Edit</button>
            <button className="delete">Delete</button>
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

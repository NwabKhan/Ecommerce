import React, { useState } from "react";
import GridView from "../producthelpers/productlist/GridView";
import { useSelector, useDispatch } from "react-redux";
import { setAllProducts } from "../../redux/products/productSlice";

const AllProducts = () => {
  const [editDelete, setEditDelete] = useState(false); //To show Edit delete btns on Grid list
  return (
    <div>
      <button
        onClick={() => {
          setEditDelete(true);
          window.scrollTo(0, 600);
        }}
      >
        Get all Products
      </button>
      {editDelete && <GridView admin={editDelete} />}
    </div>
  );
};

export default AllProducts;

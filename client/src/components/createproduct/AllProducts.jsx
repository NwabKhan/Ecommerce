import React, { useState } from "react";
import ListView from "../producthelpers/productlist/ListView";
import GridView from "../producthelpers/productlist/GridView";

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [editDelete, setEditDelete] = useState(false); //To show Edit delete on Grid list

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const getProducts = async () => {
    setLoading(true);

    try {
      const res = await fetch(
        `${process.env.REACT_APP_API_URL}get-all-products`
      );
      const data = await res.json();
      if (data.success === false) {
        setError(true);
        setLoading(false);
        return;
      }
      setProducts(data);
      setEditDelete(true);
      setLoading(false);
      setError(false);
    } catch (error) {
      console.log("first", error);
      setError(true);
      setLoading(false);
    }
  };

  return (
    <div>
      <button onClick={getProducts}>Get all Products</button>
      {editDelete && <GridView admin={editDelete} products={products} />}
    </div>
  );
};

export default AllProducts;

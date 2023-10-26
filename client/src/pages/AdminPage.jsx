import React from "react";
import CreateProduct from "../components/createproduct/CreateProduct";
import AllProducts from "../components/createproduct/AllProducts";

const AdminPage = () => {
  return (
    <div>
      <CreateProduct />
      <AllProducts />
    </div>
  );
};

export default AdminPage;

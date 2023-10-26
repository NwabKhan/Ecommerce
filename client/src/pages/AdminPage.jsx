import React from "react";
import CreateProduct from "../components/createproduct/CreateProduct";
import AllProducts from "../components/createproduct/AllProducts";
import { useNavigate } from "react-router-dom";
const AdminPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button
        onClick={() => {
          localStorage.removeItem("Auth");
          navigate("/");
        }}
      >
        Logout
      </button>
      <CreateProduct />
      <AllProducts />
    </div>
  );
};

export default AdminPage;

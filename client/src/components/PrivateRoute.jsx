import React from "react";
import { Outlet, Navigate } from "react-router-dom";
const PrivateRoutes = () => {
  const isAuth = localStorage.getItem("Auth");
  return isAuth ? <Outlet /> : <Navigate to={"/"} />;
};

export default PrivateRoutes;

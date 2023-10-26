import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
const PrivateRoutes = () => {
  const { isAuth } = useAuthContext();

  return isAuth ? <Outlet /> : <Navigate to={"/"} />;
};

export default PrivateRoutes;
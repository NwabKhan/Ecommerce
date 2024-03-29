import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { AppProvider } from "./context/ProductContext";
import { FilterContextProvider } from "./context/FilterContext";
import { CartContextProvider } from "./context/CartContext";
import store from "./redux/store";
import { Provider } from 'react-redux'
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <AppProvider>
    <FilterContextProvider>
      <CartContextProvider>
        <Provider store = {store}>
        <App />
        </Provider>
      </CartContextProvider>
    </FilterContextProvider>
  </AppProvider>
);

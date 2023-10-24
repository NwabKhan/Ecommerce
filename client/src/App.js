import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/GlobalStyle";

import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import SingleProduct from "./pages/SingleProduct";
import ErrorPage from "./pages/ErrorPage";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import BuyProduct from "./pages/BuyProduct";
import FormSubmitted from "./pages/FormSubmitted";
import SuggestionSubmitted from "./pages/SuggestionSubmitted";
import AdminLogin from "./pages/AdminLogin";
import AdminPage from "./pages/AdminPage";

const App = () => {
  const mytheme = {
    colors: {
      heading: "rgb(24 29 29)",
      text: "rgba(29 ,29, 29, .8)",
      white: "#fff",
      black: " #212529",
      helper: "#8490ff",
      bg: "#E2EAFC", //all bg change except filter section. Got to /components/producthelpers/FilterScetion
      footer_bg: "#0a1435",
      btn: "rgb(98 84 243)",
      border: "rgba(98, 84, 243, 0.5)",
      hr: "#ffffff",
      product_bg: '#EDF2FB',
      gradient:
        "linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
      shadow:
        "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
      shadowSupport: " rgba(0, 0, 0, 0.16) 0px 1px 4px",
    },

    media: {
      mobile: "768px",
      tab: "998px",
    },
  };

  return (
    <ThemeProvider theme={mytheme}>
      <BrowserRouter>
        <GlobalStyle />
        <Header />
        <Routes>
          <Route>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contact" element={<Contact />} /> 
            <Route path="/contact/suggestionsubmitted" element={<SuggestionSubmitted />} /> 
            <Route path="/cart" element={<Cart />} />
            <Route path="/singleproduct/:id" element={<SingleProduct />} />
            <Route path="/singleproduct/:id/ordernow" element={<BuyProduct />} />
            <Route path="/singleproduct/:id/ordernow/formsubmitted" element={<FormSubmitted />} />
            <Route path="/admin-login" element={<AdminLogin />} />
            <Route path="/admin" element={<AdminPage />} />
            <Route path="/*" element={<ErrorPage />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;

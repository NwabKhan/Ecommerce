import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/CartReducer";

const CartContext = createContext();

// getting back the localStorage data thus we set in JunadiStore using setItems
//Also initially localcart is empty, sor we are returning [] to avoid undefined erroe
const getLocalCartData = () => {
  let localCartData = localStorage.getItem("JunaidStore");
  if(localCartData === []){
    return []
  }
  else{
    return JSON.parse(localCartData)
  }
};

const initialState = {
  // cart: [],
  cart: getLocalCartData(), //getting the cart data that we store in localStorage
  total_item: "",
  total_amount: "",
  shipping_fee: 9000,
};

const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  //To add a product to cart 
  const addToCart = (id, color, quantity, singleProduct) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: { id, color, quantity, singleProduct },
    });
  };

  //To clear the cart
  const clearCart = ()=>{
    dispatch({type: "CLEAR_CART"})
  }

  //To add the data in LocalStorage so that cart remain available
  //even when page refreshes. But localStorage accept only strings
  //So, we have to convert cart array to string using JSON.stringify
  useEffect(()=>{
    localStorage.setItem("JunaidStore", JSON.stringify(state.cart))
  }, [state.cart])

  //to remove product from cart
  const removeItem = (id)=>{
    dispatch({type: "REMOVE_ITEM", payload: id})
  }

  return (
    <CartContext.Provider value={{ ...state, addToCart, removeItem, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

const useCartHook = () => {
  return useContext(CartContext);
};

export { useCartHook, CartContextProvider };

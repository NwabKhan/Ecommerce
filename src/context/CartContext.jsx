import { createContext, useContext, useReducer } from "react";
import reducer from "../reducer/CartReducer";

const CartContext = createContext();

const initialState = {
  cart: [],
  total_item: "",
  total_amount: "",
  shipping_fee: 9000,
};

const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  //To add a product to cart 
  const addToCart = (id, color, amount, singleProduct) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: { id, color, amount, singleProduct },
    });
  };

  //to remove product from cart
  const removeItem = (id)=>{
    dispatch({type: "REMOVE_ITEM", payload: id})
  }

  return (
    <CartContext.Provider value={{ ...state, addToCart, removeItem }}>
      {children}
    </CartContext.Provider>
  );
};

const useCartHook = () => {
  return useContext(CartContext);
};

export { useCartHook, CartContextProvider };

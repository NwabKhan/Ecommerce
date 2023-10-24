import { useEffect } from "react";
import { createContext, useContext } from "react";
import { useReducer } from "react";

import reducer from "../reducer/ProductReducer";
import { data } from "../resources/productsData";
import { singleProductData } from "../resources/singleProductData";

const AppContext = createContext();

const initailState = {
  isError: false,
  isLoading: false,
  products: [],
  featuredProducts: [],
  isSingleLoading: false,
  singleProduct: [],
};

const AppProvider = ({ children }) => {
  //Dispatch is like a function call
  const [state, dispatch] = useReducer(reducer, initailState);
  
  const getProduct = () => {
    try {
      dispatch({ type: "LOADING" });
      const products = data;
      dispatch({ type: "SET_DATA", payload: products });
    } catch (err) {
      dispatch({ type: "ERROR" });
    }
  };

  const getSingleProduct = (id) => {
    try {
      dispatch({ type: "IS_SINGLE_LOADING" });
      const singleProduct = singleProductData;
      dispatch({ type: "SET_SINGLE_PRODUCT", payload: singleProduct, id: id });
    } catch (err) {
      dispatch({ type: "Error" });
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <AppContext.Provider value={{ ...state, getSingleProduct }}>
      {children}
    </AppContext.Provider>
  );
};

//custom hook
const useMyHook = () => {
  return useContext(AppContext);
};
export { AppContext, AppProvider, useMyHook };

// If we have API, use This code

// import { useEffect } from "react";
// import { createContext, useContext } from "react";
// import axiox from 'axios'
// import { useReducer } from "react";
// import reducer from '../reducer/ProductReducer'
// const AppContext = createContext();

// const url = "https://api.pujakaitem.com/api/products"

// const initailState = {
//     isError: false,
//     isLoading: false,
//     products: [],
//     featuredProducts: []
// }

// const AppProvider = ({ children }) => {
//     //Dispatch is like a function call
//     const [state, dispatch] = useReducer(reducer , initailState)
//     const getProduct = async(url)=>{
//         dispatch({type: 'Loading'})
//         try{
//             const res = await axiox.get(url)
//             const products = await res.data
//             dispatch({type: 'setData', payload: products})
//         }catch(err){
//             dispatch({type: 'Error'})
//         }

//     }
//     useEffect(()=>{
//         getProduct(url)
//     },[])
//   return (
//     <AppContext.Provider value={{...state }}>
//       {children}
//     </AppContext.Provider>
//   );
// };

// //custom hook
// const useMyHook = () => {
//   return useContext(AppContext);
// };
// export { AppContext, AppProvider, useMyHook };

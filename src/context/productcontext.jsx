import { useEffect } from "react";
import { createContext, useContext } from "react";
import { useReducer } from "react";
import reducer from "../reducer/ProductReducer";
import { data } from "../data";

const AppContext = createContext();

const initailState = {
  isError: false,
  isLoading: false,
  products: [],
  featuredProducts: [],
};

const AppProvider = ({ children }) => {
  //Dispatch is like a function call
  const [state, dispatch] = useReducer(reducer, initailState);
  const getProduct = () => {
    try {
      dispatch({ type: "Loading" });
      const products = data;
      dispatch({ type: "setData", payload: products });
    } catch (err) {
      dispatch({ type: "Error" });
    }
  };
  useEffect(() => {
    getProduct();
  }, []);
  return (
    <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>
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

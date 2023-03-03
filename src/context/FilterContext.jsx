import { createContext, useContext, useEffect, useReducer } from "react";
import {useMyHook} from './ProductContext'
import reducer from '../reducer/FilterReducer'

const FilterContext = createContext()

const initialState = {
    filterProducts : [],
    allProducts : [],
    grid_view: true
}
const FilterContextProvider = ({children})=>{

    const {products} = useMyHook() // getting the products from productcontext(appcontext)
    const [state, dispatch] = useReducer(reducer, initialState)

    const setGridView = ()=>{
        dispatch({type: "GridView"})
    }

    useEffect(()=>{
        dispatch({type: "LoadFilterProduct", payload: products})
    }, [products])
    return(
        <FilterContext.Provider value={{...state, setGridView}}>{children}</FilterContext.Provider>
    )
}

const useFilterHook = () => {
    return useContext(FilterContext);
  };

export {useFilterHook, FilterContext, FilterContextProvider}
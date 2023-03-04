import { createContext, useContext, useEffect, useReducer } from "react";
import {useMyHook} from './ProductContext'
import reducer from '../reducer/FilterReducer'

const FilterContext = createContext()

const initialState = {
    filterProducts : [],
    allProducts : [],
    grid_view: true,
    sorting_value: "lowest"
}
const FilterContextProvider = ({children})=>{

    const {products} = useMyHook() // getting the products from productcontext(appcontext)
    const [state, dispatch] = useReducer(reducer, initialState)

    const setGridView = ()=>{
        dispatch({type: "GridView"})
    }
    const setListView = ()=>{
        dispatch({type: "ListView"})
    }

    const sorting = (event)=>{
        const value = event.target.value
        dispatch({type: "getSortValue", payload: value})        
    }
    useEffect(()=>{
        dispatch({type: "SortingProduct"})
    }, [state.sorting_value])

    useEffect(()=>{
        dispatch({type: "LoadFilterProduct", payload: products})
    }, [products])
    return(
        <FilterContext.Provider value={{...state, setGridView, setListView, sorting}}>{children}</FilterContext.Provider>
    )
}

const useFilterHook = () => {
    return useContext(FilterContext);
  };

export {useFilterHook, FilterContext, FilterContextProvider}
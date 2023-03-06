import { createContext, useContext, useEffect, useReducer } from "react";
import { useMyHook } from "./ProductContext";
import reducer from "../reducer/FilterReducer";

const FilterContext = createContext();

const initialState = {
  filterProducts: [],
  allProducts: [],
  grid_view: true,
  sorting_value: "lowest",
  filters: {
    text: "",
    category: "all",
    company: "all",
    color: "all",
  },
};

const FilterContextProvider = ({ children }) => {
  const { products } = useMyHook(); // getting the products from productcontext(appcontext)
  const [state, dispatch] = useReducer(reducer, initialState);

  const setGridView = () => {
    dispatch({ type: "GRID_VIEW" });
  };
  
  //it will make the grid_view false
  const setListView = () => {
    dispatch({ type: "LIST_VIEW" });
  };

  //Function to change the sorting value
  const sorting = (event) => {
    const value = event.target.value;
    dispatch({ type: "SORT_VALUE", payload: value });
  };

  //To update the filter value based on what user type
  const updateFilterValue = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    dispatch({ type: "UPDATE_FILTER_VALUE", payload: { value, name } });
  };

  const clearFilters = () => {
    dispatch({ type: "CLEAR_FILTERS" });
  };

  //to sort the products according to sorting value. i.e highest cost(ascending)
  //run this useEffect when even the sorting-value or the text(in filter) changes
  useEffect(() => {
    dispatch({ type: "SINGLE_PRODUCT" });
    dispatch({ type: "FILTER_PRODUCT" });
  }, [products, state.sorting_value, state.filters]);

  //it will call initailly to get all the products when page loads
  //in dependency array, state.filters.text it is included just for
  //the clear filter button(i was stuck here, temporary solution)
  useEffect(() => {
    dispatch({ type: "LOAD_FILTER_PRODUCT", payload: products });
  }, [products, state.filters.text]);

  return (
    <FilterContext.Provider
      value={{
        ...state,
        setGridView,
        setListView,
        sorting,
        updateFilterValue,
        clearFilters,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

const useFilterHook = () => {
  return useContext(FilterContext);
};

export { useFilterHook, FilterContext, FilterContextProvider };

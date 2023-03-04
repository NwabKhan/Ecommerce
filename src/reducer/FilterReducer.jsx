const FilterReducer = (state, action) => {
  switch (action.type) {
    case "LoadFilterProduct":
      return {
        ...state,
        filterProducts: [...action.payload], //making the copy of original data
        allProducts: [...action.payload],
      };

    case "GridView":
      return {
        ...state,
        grid_view: true,
      };

    case "ListView":
      return {
        ...state,
        grid_view: false,
      };

    case "getSortValue":
      return {
        ...state,
        sorting_value: action.payload,
      };

    case "SortingProduct":

      let sortedData;
      const { filterProducts, sorting_value } = state;
      let tempProducts = [...filterProducts];

      //sortin data on differnt checks
      const sortingProduct = (a, b) => {
        if (sorting_value === "lowest") {
          return a.price - b.price;
        }
        if (sorting_value === "highest") {
          return b.price - a.price;
        }
        if (sorting_value === "a-z") {
          return a.name.localeCompare(b.name)
        }
        if (sorting_value === "z-a") {
          return b.name.localeCompare(a.name);
        }
      };      

      sortedData = tempProducts.sort(sortingProduct);

      return {
        ...state,
        filterProducts: sortedData,
      };

    default:
      return state;
  }
};

export default FilterReducer;

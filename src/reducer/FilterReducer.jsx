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
        grid_view: true
      };
    case "ListView":
      return {
        ...state,
        grid_view: false
      };

    default:
      return state;
  }
};

export default FilterReducer;

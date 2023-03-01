const ProductReducer = (state, action) => {
  switch (action.type) {
    case "Loading":
      return {
        ...state,
        isLoading: true,
      };
    case "setData":
      const featuredData = action.payload.filter((product) => {
        return product.featured === true;
      });
      return {
        ...state,
        products: action.payload,
        featuredProducts: featuredData,
        isLoading: false,
      };
    case "isSingleLoading":
      return {
        ...state,
        isSingleLoading: true,
      };
    case "setSingleProduct":
      const filteredProduct = action.payload.filter((item) => {
        return item.id === action.id;
      });
      return {
        ...state,
        singleProduct: filteredProduct,
        isSingleLoading: false,
      };
    case "Error":
      return {
        ...state,
        isError: true,
      };
    default:
      return state;
  }
};

export default ProductReducer;

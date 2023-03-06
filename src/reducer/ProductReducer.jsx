const ProductReducer = (state, action) => {
  switch (action.type) {
    case "LOADING":
      return {
        ...state,
        isLoading: true,
      };

    case "SET_DATA":
      const featuredData = action.payload.filter((product) => {
        return product.featured === true;
      });

      return {
        ...state,
        products: action.payload,
        featuredProducts: featuredData,
        isLoading: false,
      };

    case "IS_SINGLE_LOADING":
      return {
        ...state,
        isSingleLoading: true,
      };

    case "SET_SINGLE_PRODUCT":
      const filteredProduct = action.payload.filter((item) => {
        return item.id === action.id;
      });

      return {
        ...state,
        singleProduct: filteredProduct,
        isSingleLoading: false,
      };

    case "ERROR":
      return {
        ...state,
        isError: true,
      };

    default:
      return state;
  }
};

export default ProductReducer;

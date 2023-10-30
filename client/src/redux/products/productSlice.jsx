import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "products",
  initialState: {
    allProducts: null,
    editProduct: {
      name: "",
      rating: 0,
      total_reviews: 0,
      regularPrice: 0,
      discountedPrice: 0,
      description: "",
      stock: false,
      ID: "",
      brand: "",
      color: false,
      maxQuantity: 0,
      imageUrls: [],
    },
  },
  reducers: {
    setAllProducts: (state, action) => {
      state.allProducts = action.payload;
    },

    setEditProduct: (state, action) => {
      state.editProduct = action.payload;
    },
  },
});

export const { setAllProducts, setEditProduct } = productSlice.actions;
export default productSlice.reducer;

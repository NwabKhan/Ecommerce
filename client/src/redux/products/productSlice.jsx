import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "products",
  initialState: {
    products: null,
  },
  reducers: {
    setAllProducts: (state, action) => {
      state.products = action.payload;
    },
  },
});

export const {setAllProducts} = productSlice.actions
export default productSlice.reducer;
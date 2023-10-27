import { configureStore } from '@reduxjs/toolkit'
import productReducer from './products/productSlice'
export default configureStore({
  reducer: {
    products: productReducer
  },
})
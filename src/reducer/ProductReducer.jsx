const ProductReducer = (state, action) => {
  switch(action.type){
    case "Loading":
      return{
        ...state,
        isLoading: true
      }
    case "setData":
      const featuredData = action.payload.filter((product)=>{
        return product.featured === true
      })
      return{
        ...state,
        products: action.payload,
        featuredProducts: featuredData,
        isLoading: false
      }
    case "Error":
      return{
        ...state,
        isError: true
      }
    default: 
      return state
  }
}

export default ProductReducer
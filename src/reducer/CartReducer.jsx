const CartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const { id, color, quantity, singleProduct } = action.payload;

      //checking if the the cliked product already exists in cart
      //if yes then we just increment quantity(if less then stock)
      //Here id+color is the id and color of the product, they we are going to add in cart
      let existingProduct = state.cart.find(
        (currentItem) => currentItem.id === id + color 
      );
      //if product already exists. then first we find out what is that 
      //product using map. then tackle quantity(increase by one if stock available)
      if (existingProduct) {
        let updateExistingProduct = state.cart.map(currentProduct =>{
          if(currentProduct.id === id+color){
            let newQuantity = currentProduct.quantity + quantity
            //checking if the newQuantity is becoming > then the stock
            if(newQuantity >= currentProduct.stock){
              newQuantity = currentProduct.stock
            }
            return{
              ...currentProduct,
              quantity : newQuantity
            }
          }else{
            return{currentProduct}
          }
        })
        return{
          ...state,
          cart : updateExistingProduct
        }
      } else {
        //If I do this 'cart : [...state.cart, singleProduct]', it will
        //add the the single product data to cart. but we want some. so,
        let cartProduct = {
          id: id + color, //some product have same id(but different colors)
          name: singleProduct.name,
          color, //it is same as color: color
          quantity: quantity,
          image: singleProduct.image[0].url,
          price: singleProduct.price,
          stock: singleProduct.stock,
        };
        return {
          ...state,
          cart: [...state.cart, cartProduct],
        };
      }

    case "REMOVE_ITEM":
      let updatedCart = state.cart.filter(
        (currentProduct) => currentProduct.id !== action.payload
      );
      return {
        ...state,
        cart: updatedCart, // same as cart: [...updatedCart]
      };

    case "CLEAR_CART":
      return {
        ...state,
        cart: [],
      };

    case "SET_INCREASE":
      //first we find out on chich elemts use want to increase
      let updateExistingQuantity = state.cart.map((currentProduct)=>{
        if (currentProduct.id === action.payload){
          let newQuantity = currentProduct.quantity + 1
          // if(newQuantity >= currentProduct.stock){
          //   newQuantity = currentProduct.stock
          //   return newQuantity
          // }
          return{
            ...currentProduct,
            quantity : newQuantity
          }
        }else{
          return{
            currentProduct
          }
        }
      })
      return{
        ...state,
        cart: updateExistingQuantity
      }

    case "SET_DECREASE":
      //first we find out on chich elemts use want to increase
      let updateCartQuantity = state.cart.map((currentProduct)=>{
        if (currentProduct.id === action.payload){
          let newQuantity = currentProduct.quantity - 1
          // if(newQuantity >= currentProduct.stock){
          //   newQuantity = currentProduct.stock
          //   return newQuantity
          // }
          return{
            ...currentProduct,
            quantity : newQuantity
          }
        }else{
          return{
            currentProduct
          }
        }
      })
      return{
        ...state,
        cart: updateCartQuantity
      }
    default:
      return state;
  }
};

export default CartReducer;

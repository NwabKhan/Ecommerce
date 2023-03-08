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
    default:
      return state;
  }
};

export default CartReducer;

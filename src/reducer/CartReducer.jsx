const CartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const { id, color, amount, singleProduct } = action.payload;

      //If I do this 'cart : [...state.cart, singleProduct]', it will
      //add the the single product data to cart. but we want some. so,

      let cartProduct = {
        id: id + color, //some product have same id(but different colors)
        name: singleProduct.name,
        color, //it is same as color: color
        quantity: amount,
        image: singleProduct.image[0].url,
        price: singleProduct.price,
        stock: singleProduct.stock,
      };
      return {
        ...state,
        cart: [...state.cart, cartProduct],
      };

    case "REMOVE_ITEM":

    let updatedCart = state.cart.filter((currentProduct)=>currentProduct.id !== action.payload)
      return {
        ...state,
        cart: updatedCart // same as cart: [...updatedCart]
      };

    default:
      return state;
  }
};

export default CartReducer;

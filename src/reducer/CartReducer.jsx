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

    case "TOTAL_CART_ITEMS": //Update the currentcart items(used in Header/Navbar)
      let cart_total_items = state.cart.reduce((accumulator, currentValue) => {
        let { quantity } = currentValue;
        accumulator = accumulator + quantity;
        return accumulator;
      }, 0);
      return {
        ...state,
        total_item: cart_total_items,
      };

    case "SET_INCREASE":
      let updatedProduct = state.cart.map((curElem) => {
        if (curElem.id === action.payload) {
          
          let incAmount = curElem.quantity + 1;
  
          if (incAmount >= curElem.stock) {
            incAmount = curElem.quantity;
          }
  
          return {
            ...curElem,
            quantity: incAmount,
          };
        } else {
          return curElem;
        }
      });
      return { ...state, cart: updatedProduct };

    case "SET_DECREASE":
      let updateProduct = state.cart.map((curElem) => {
        if (curElem.id === action.payload) {
          let decAmount = curElem.quantity - 1;
  
          if (decAmount <= 1) {
            decAmount = 1;
          }
  
          return {
            ...curElem,
            quantity: decAmount,
          };
        } else {
          return curElem;
        }
      });
      return { ...state, cart: updateProduct };


      case "CART_ITEM_PRICE_TOTAL" : 
        let { total_item, total_price } = state.cart.reduce(
          (accum, curElem) => {
            let { price, quantity } = curElem;
    
            accum.total_item += quantity;
            accum.total_price += price * quantity;
    
            return accum;
          },
          {
            total_item: 0,
            total_price: 0,
          }
        );
        return {
          ...state,
          total_item,
          total_price,
        };    

    default:
      return state;
  }
};

export default CartReducer;

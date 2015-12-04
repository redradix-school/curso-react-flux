import { Store } from 'flux/utils';
import Dispatcher from '../app_dispatcher';
import { CART_ADD, CART_CHANGE_QTY, CART_REMOVE, ORDER_SAVE } from '../action_types';

var __items = [];

// Adds a product to the cart
// If the product's already in the cart, its quantity will be incremented
function addProductToCart(product){
  //TODO
}

// Changes a product quantity in the cart
function changeProductQuantity(productId, quantity){
  //TODO
}

// Removes a product from the cart
function removeProductFromCart(productId){
  //TODO
}

// Empties the cart
function emptyCart(){
  //TODO
}


class CartStore extends Store {
  getCartItems(){
    return __items;
  }

  __onDispatch(action){
    switch(action.type){
      //TODO

      default:
        return;
    }

  }
}

export default new CartStore(Dispatcher);
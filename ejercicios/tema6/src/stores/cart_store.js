import { Store } from 'flux/utils';
import Dispatcher from '../app_dispatcher';
import { CART_ADD, CART_CHANGE_QTY, CART_REMOVE, ORDER_SAVE } from '../action_types';

var __items = [];

// Adds a product to the cart
// If the product's already in the cart, its quantity will be incremented
function addProductToCart(product){
  var existing = __items.find(x => x.id === product.id);
  if(existing){
    changeProductQuantity(product.id, existing.quantity+1);
  }
  else {
    __items = __items.concat(Object.assign({ quantity: 1 }, product));
  }
}

// Changes a product quantity in the cart
function changeProductQuantity(productId, quantity){
  __items = __items.map(p => {
    if(p.id === productId){
      p.quantity = quantity;
    }
    return p;
  });

}

// Removes a product from the cart
function removeProductFromCart(productId){
  __items = __items.filter(p => p.id !== productId);
}

// Empties the cart
function emptyCart(){
  __items = [];
}


export class CartStore extends Store {
  getCartItems(){
    return __items;
  }

  __onDispatch(action){
    switch(action.type){
      case CART_ADD:
        addProductToCart(action.product);
        this.__emitChange();
        break;

      case CART_CHANGE_QTY:
        changeProductQuantity(action.productId, action.quantity);
        this.__emitChange();
        break;

      case CART_REMOVE:
        removeProductFromCart(action.productId);
        this.__emitChange();
        break;

      case ORDER_SAVE:
        emptyCart();
        this.__emitChange();
        break;

      default:
        return;
    }

  }
}

export default new CartStore(Dispatcher);
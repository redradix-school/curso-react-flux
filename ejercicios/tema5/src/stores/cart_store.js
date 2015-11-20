import { Store } from 'flux/utils';
import Dispatcher from '../app_dispatcher';
import { CART_ADD, CART_CHANGE_QTY, CART_REMOVE, ORDER_SAVE } from '../action_types';
import CatalogStore from './catalog_store';

var __items = [];

// Adds a product to the cart
//  If the product's already in the cart, its quantity will be incremented
//  It uses CatalogStore to get the product model
function addProductToCart(productId){
  let product = CatalogStore.getProductById(productId);

  if(!product) return;
  //product already exists?
  var existingProduct = __items.find(i => i.id === productId);
  if(existingProduct){
    changeProductQuantity(productId, existingProduct.quantity+1);
  }
  else {
    __items.push(Object.assign({}, product, { quantity: 1}));
  }
}

// Changes a product quantity in the cart
function changeProductQuantity(productId, quantity){
  __items = __items.map(item => {
    if(item.id === productId){
      item.quantity = quantity;
    }
    return item;
  }).filter(item => item.quantity > 0);
}

// Removes a product from the cart
function removeProductFromCart(productId){
  __items = __items.filter(item => item.id !== productId);
}

// Empties the cart
function emptyCart(){
  __items = [];
}


class CartStore extends Store {
  getCartItems(){
    return __items;
  }

  __onDispatch(action){
    switch(action.type){
      case CART_ADD:
        addProductToCart(action.productId);
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
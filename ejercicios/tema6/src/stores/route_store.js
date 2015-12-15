import { Store } from 'flux/utils';
import Dispatcher from '../app_dispatcher';
import { PAGE_SET, CART_ADD, ORDER_SAVE } from '../action_types';
import CartStore from './cart_store';
import OrderStore from './order_store';
// para esperar con Dispatcher.waitFor
const cartStoreToken = CartStore.getDispatchToken();
const orderStoreToken = OrderStore.getDispatchToken();

var __page = 'catalog';

function changePage(newPage){
  __page = newPage;
}


export class RouteStore extends Store {
  getPage(){
    return __page;
  }
  __onDispatch(action){
    switch(action.type){
    case PAGE_SET:
      changePage(action.page);
      this.__emitChange();
      break;

    case CART_ADD:
      changePage('cart');
      this.__emitChange();
      break;

    case ORDER_SAVE:
      changePage('thankyou');
      this.__emitChange();
      break;
    }
  }
}

export default new RouteStore(Dispatcher);
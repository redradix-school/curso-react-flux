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


class RouteStore extends Store {
  //TODO: getXXX
  //
  __onDispatch(action){

  }
}

export default new RouteStore(Dispatcher);
import { Store } from 'flux/utils';
import Dispatcher from '../app_dispatcher';
import { CATALOG_RECEIVE } from '../action_types';

//keeps our catalog items
var __products = [];
//indicates if the catalog has products loaded
var __isLoaded = false;

function receiveProducts(products){
  __products = products;
  __isLoaded = true;
}

class CatalogStore extends Store {
  getProducts(){
    return __products;
  }

  getProductById(id){
    let products = __products.filter(p => p.id === id);
    return products.length ? products[0] : null;
  }

  isReady(){
    return __isLoaded;
  }

  __onDispatch(action){
    switch(action.type){
      case CATALOG_RECEIVE:
        receiveProducts(action.products);
        this.__emitChange();
        break;
      default:
        return;
    }
  }
}

export default new CatalogStore(Dispatcher);



import { Store } from 'flux/utils';
import Dispatcher from '../app_dispatcher';
import { CATALOG_RECEIVE, STORE_INIT } from '../action_types';

//category name
var __categoryId = -1;
//keeps our catalog items
var __products = [];
//indicates if the catalog has products loaded
var __isLoaded = false;

function receiveProducts(products, categoryId){
  __categoryId = categoryId;
  __products = products;
  __isLoaded = true;
}

class CatalogStore extends Store {
  getProducts(){
    return __products;
  }

  getCategoryId(){
    return __categoryId;
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
        receiveProducts(action.products, action.categoryId);
        this.__emitChange();
        break;

      case STORE_INIT:
        receiveProducts(action.initialState.products || [], action.initialState.categoryId || -1);
        break;

      default:
        return;
    }
  }
}

export default new CatalogStore(Dispatcher);



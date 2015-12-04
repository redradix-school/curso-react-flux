import { Store } from 'flux/utils';
import Dispatcher from '../app_dispatcher';
import { CATALOG_RECEIVE } from '../action_types';

//keeps our catalog items
var __products = [];
//indicates if the catalog has products loaded
var __isLoaded = false;

class CatalogStore extends Store {
  getProducts(){
    return __products;
  }


  __onDispatch(action){
    switch(action.type){
      //TODO
      default:
        return;
    }
  }
}

export default new CatalogStore(Dispatcher);



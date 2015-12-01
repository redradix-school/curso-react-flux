import { Store } from 'flux/utils';
import Dispatcher from '../app_dispatcher';

import { CATEGORIES_RECEIVE, STORE_INIT } from '../action_types';

var __categories = [];

class CategoryStore extends Store {
  getCategories(){
    return __categories;
  }

  getCategoryNameById(id){
    return __categories.reduce((acc, c) => {
      if(c.id === id) {
        acc = c.name;
      }
      return acc;
    }, "");
  }

  isReady(){
    return __categories.length > 0;
  }
  __onDispatch(action){
    switch(action.type){

      case CATEGORIES_RECEIVE:
        __categories = action.categories;
        this.__emitChange();
        break;

      case STORE_INIT:
        __categories = action.initialState.categories || [];
        break;
    }
  }
}

export default new CategoryStore(Dispatcher);
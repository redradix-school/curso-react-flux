import { Store } from 'flux/utils';
import Dispatcher from '../app_dispatcher';
import { ORDER_SAVE, ORDER_SET_ERRORS } from '../action_types';

//TODO - variables privadas

function saveOrderDetails(details){
  //TODO
}

function saveValidationErrors(errors = {}){
  //TODO
}

export class OrderStore extends Store {
  getDetails(){
    //TODO
  }

  getOrderErrors(){
    //TODO
  }

  __onDispatch(action){
    switch(action.type){
      //TODO

      default:
        return;
    }
  }

}

export default new OrderStore(Dispatcher);
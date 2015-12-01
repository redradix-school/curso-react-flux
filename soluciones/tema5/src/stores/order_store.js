import { Store } from 'flux/utils';
import Dispatcher from '../app_dispatcher';
import { ORDER_SAVE, ORDER_SET_ERRORS } from '../action_types';

var __orderDetails = {};
var __errors = {};

function saveOrderDetails(details){
  __orderDetails = {
    firstName: details.firstName,
    lastName: details.lastName,
    email: details.email,
    address: details.address,
    createdAt: new Date()
  }
}

function saveValidationErrors(errors = {}){
  __errors = errors;
}

class OrderStore extends Store {
  getDetails(){
    return __orderDetails;
  }

  getOrderErrors(){
    return __errors;
  }

  __onDispatch(action){
    switch(action.type){
      case ORDER_SET_ERRORS:
        saveValidationErrors(action.errors);
        this.__emitChange();
        break;

      case ORDER_SAVE:
        saveValidationErrors({});
        saveOrderDetails(action.orderDetails);
        this.__emitChange();
        break;

      default:
        return;
    }
  }

}

export default new OrderStore(Dispatcher);
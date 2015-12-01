import Dispatcher from '../app_dispatcher';
import { Store } from 'flux/utils';
import { LOGIN } from '../action_types';

var _loggedIn = false;
var _user = {};

function logUser(){
  _loggedIn = true;
}

function receiveUserData(user){
  _user = user;
}

class SessionStore extends Store {
  isUserLoggedIn(){
    return _loggedIn;
  }

  getUserData(){
    return _user;
  }

  __onDispatch(action){
    switch(action.type){
      case LOGIN:
        receiveUserData(action.user);
        logUser();
        this.__emitChange();
        break;

      default:
        return;
    }
  }
}

export default new SessionStore(Dispatcher);
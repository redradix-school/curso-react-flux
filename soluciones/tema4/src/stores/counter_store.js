import { Store } from 'flux/utils';
import AppDispatcher from '../app_dispatcher';

//private data
let _counter = 0;

function incrementCounter(){
  _counter++;
}

class CounterStore extends Store {
  getCounter(){
    return _counter;
  }

  __onDispatch(action){
    switch(action.type){

      case 'COUNTER_INCREMENT':
        incrementCounter();
        this.__emitChange();
        break;

      default:
        //noop

    }
  }
}

export default new CounterStore(AppDispatcher);

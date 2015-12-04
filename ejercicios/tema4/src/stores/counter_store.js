import { Store } from 'flux/utils';
import AppDispatcher from '../app_dispatcher';

//private data
var _counter = 0;

function incrementCounter(){
  _counter++;
}

class CounterStore extends Store {
  getCounter(){
    return _counter;
  }

  __onDispatch(action){
    switch(action.type){

     //...

    }
  }
}

export default new CounterStore(AppDispatcher);

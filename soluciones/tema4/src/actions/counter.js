import Dispatcher from '../app_dispatcher';

export function increment(){
  Dispatcher.dispatch({
    type: 'COUNTER_INCREMENT'
  });
}



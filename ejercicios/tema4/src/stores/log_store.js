import Dispatcher from '../app_dispatcher';
/**

This is a development/debugging store
It will simply print out in the console every action
flowing through the system
**/

Dispatcher.register((action) => {
  console.log('Dispatch', action.type, action);
});
//babel-polyfill para ES5 en navegadores antiguos
require('babel-polyfill');
import React from 'react';
import ReactDOM from 'react-dom';
import Dispatcher from './app_dispatcher';
//Counter
// import CounterStore from './stores/counter_store';
// import CounterWithMixin from './components/counter_with_mixin';
// import CounterHOC from './components/counter_with_hoc';

//Ecommerce
import { STORE_INIT } from './action_types';
// LogStore - console.log de todas las acciones
import LogStore from './stores/log_store';
import CatalogStore from './stores/catalog_store';
import CartStore from './stores/cart_store';
import RouteStore from './stores/route_store';
import OrderStore from './stores/order_store';
import Ecommerce from './components/ecommerce';

//routes
//import ExampleRouter from './routes/example';

//universal app
//import history from './lib/history';
import UniversalApp from './universal_app';

window.onload = function(){
  // let initialState = window.__initialState;
  // if(typeof(initialState) !== 'undefined'){
  //   initialState = (typeof(initialState) === 'string') ? JSON.parse(initialState) : initialState;
  //   Dispatcher.dispatch({ type: STORE_INIT, initialState });
  //   //delete script tag
  //   var dataScript = document.getElementById('__initialState');
  //   if(dataScript)
  //     dataScript.parentNode.removeChild(dataScript);
  // }
  ReactDOM.render(<UniversalApp history={ history }/>, document.getElementById('app'));
}

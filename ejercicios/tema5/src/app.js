//babel-polyfill para ES5 en navegadores antiguos
require('babel-polyfill');
import React from 'react';
import ReactDOM from 'react-dom';
//Counter
import CounterStore from './stores/counter_store';
import CounterWithMixin from './components/counter_with_mixin';
import CounterHOC from './components/counter_with_hoc';

//Ecommerce
import CatalogStore from './stores/catalog_store';
import CartStore from './stores/cart_store';
import RouteStore from './stores/route_store';
import OrderStore from './stores/order_store';
import Ecommerce from './components/ecommerce';

//routes
import ExampleRouter from './routes/example';

//universal app
import history from './lib/history';
import UniversalApp from './universal_app';

window.onload = function(){
  ReactDOM.render(<UniversalApp history={ history }/>, document.getElementById('app'));
}

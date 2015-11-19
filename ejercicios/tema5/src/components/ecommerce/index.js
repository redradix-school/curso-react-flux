import React from 'react';

import Catalog from './catalog';
import Cart from './cart';
import Checkout from './checkout';
import ThankYou from './thankyou';
import NotFound from './notfound';

import LogStore from '../../stores/log_store';
import CatalogStore from '../../stores/catalog_store';
import CartStore from '../../stores/cart_store';
import OrderStore from '../../stores/order_store';
import RouteStore from '../../stores/route_store';

//action creators
import { receiveCatalogProducts } from '../../actions/ecommerce';
import { products as catalogProducts } from '../../data/shopping_cart';

//route and history
import { Router, Route } from 'react-router';
import history from '../../lib/history';
// import { createHistory } from 'history/lib/createHistory';

// let history = createHistory();

const Shop = React.createClass({
  loadProducts(){
    receiveCatalogProducts(catalogProducts);
  },
  render(){
    return (
      <div className='shopping-cart'>
        <Router history={ history }>
          <Route path='/' component={ Catalog } onEnter={ this.loadProducts } />
          <Route path='/cart' component={ Cart } />
          <Route path='/checkout' component={ Checkout } />
          <Route path='/thankyou' component={ ThankYou } />
          <Route path='*' component={ NotFound } />
        </Router>
      </div>
    )
  }
});

export default Shop;
import React from 'react';

import Home from './components/ecommerce/home';
import Catalog from './components/ecommerce/catalog';
import Cart from './components/ecommerce/cart';
import Checkout from './components/ecommerce/checkout';
import ThankYou from './components/ecommerce/thankyou';
import Login from './components/ecommerce/login';
import NotFound from './components/ecommerce/notfound';

import { Route, IndexRoute } from 'react-router';

const ShopRoutes = (
  <Route path='/' >
    <IndexRoute component={ Catalog } />
    <Route path='cart' component={ Cart } />
    <Route path='checkout' component={ Checkout } />
    <Route path='thankyou' component={ ThankYou } />
    <Route path='*' component={ NotFound } />
  </Route>
);

export default ShopRoutes;
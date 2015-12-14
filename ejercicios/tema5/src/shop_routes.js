import React from 'react';

import Home from './components/ecommerce/home';
import Catalog from './components/ecommerce/catalog';
import Cart from './components/ecommerce/cart';
import Checkout from './components/ecommerce/checkout';
import ThankYou from './components/ecommerce/thankyou';
import Login from './components/ecommerce/login';
import NotFound from './components/ecommerce/notfound';

import { Route, IndexRoute } from 'react-router';

// const ShopRoutes = (
//   <Route path='/'component={ Home } >
//     <Route path='c/:id/:slug' component={ Catalog } />
//     <Route path='cart' component={ Cart } />
//     <Route path='checkout' component={ Checkout } />
//     <Route path='thankyou' component={ ThankYou } />
//     <Route path='*' component={ NotFound } />
//   </Route>
// );

const ShopRoutes = [
  {
    path: '/',
    component: Home,
    childRoutes: [
      { path: 'c/:id/:slug',
        component: Catalog,
        onEnter: (nextState)=> nextState.params.id = parseInt(nextState.params.id)
      },
      { path: 'cart', component: Cart },
      { path: 'checkout', component: Checkout },
      { path: 'thankyou', component: ThankYou },
      { path: '*', component: NotFound },
    ]
  }
];

export default ShopRoutes;
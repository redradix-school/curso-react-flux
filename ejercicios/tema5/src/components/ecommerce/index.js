import React from 'react';

import Home from './home';
import Catalog from './catalog';
import Cart from './cart';
import Checkout from './checkout';
import ThankYou from './thankyou';
import Login from './login';
import NotFound from './notfound';

import LogStore from '../../stores/log_store';
import CatalogStore from '../../stores/catalog_store';
import CartStore from '../../stores/cart_store';
import OrderStore from '../../stores/order_store';
import RouteStore from '../../stores/route_store';
import SessionStore from '../../stores/session_store';

//action creators
import { receiveCatalogProducts, loadCategories, loadProductsByCategory } from '../../actions/ecommerce';
import { products as catalogProducts } from '../../data/shopping_cart';

//route and history
import { Router, Route } from 'react-router';
import shopRoutes from '../../shop_routes';
import history from '../../lib/history';


const Shop = React.createClass({
  componentDidMount(){

  },
  onEnterHome(){
    loadCategories();
  },
  onEnterCatalog(nextState){
    loadProductsByCategory(parseInt(nextState.params.id));
  },
  checkUserLoggedIn(nextState, replaceState){
    if(CartStore.getCartItems().length === 0){
      console.log('No products in cart');
      return replaceState(null, '/');
    }
    if(!SessionStore.isUserLoggedIn()){
      console.log('User not logged in!');
      return replaceState(null, '/login', { returnPath: nextState.location.pathname });
    }
  },
  render(){
    return (
      <div className='shopping-cart'>
        <Router history={ history } routes={ shopRoutes } />
      </div>
    )
  }
});

// <Route path='/' component={ Home } onEnter={ this.onEnterHome }>
          //   <Route path=':id/:slug' component={ Catalog } onEnter={ this.onEnterCatalog } />
          //   <Route path='cart' component={ Cart } />
          //   <Route path='checkout' component={ Checkout } onEnter={ this.checkUserLoggedIn } />
          //   <Route path='thankyou' component={ ThankYou } />
          //   <Route path='login' component={ Login } />
          //   <Route path='*' component={ NotFound } />
          // </Route>

export default Shop;
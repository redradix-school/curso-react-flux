import React from 'react';
import CategoryStore from '../../stores/category_store';
// import CartStore from '../../stores/cart_store';
// import OrderStore from '../../stores/order_store';
// import RouteStore from '../../stores/route_store';
// import SessionStore from '../../stores/session_store';

//action creators
import { receiveCatalogProducts, loadCategories, loadProductsByCategory } from '../../actions/ecommerce';
import { products as catalogProducts } from '../../data/shopping_cart';

//route and history
import { Router, Route } from 'react-router';
import shopRoutes from '../../shop_routes';
import history from '../../lib/history';


const Shop = React.createClass({
  componentDidMount(){
    if(!CategoryStore.isReady()){
      loadCategories();
    }
  },
  onEnterCatalog(nextState){
    loadProductsByCategory(parseInt(nextState.params.id));
  },
  render(){
    return (
      <Router history={ history } routes={ shopRoutes } />
    );
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
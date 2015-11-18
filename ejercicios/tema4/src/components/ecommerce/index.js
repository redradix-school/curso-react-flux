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

const Shop = React.createClass({
  componentDidMount(){
    //load products in catalog, simulate async delay
    setTimeout(() => {
      receiveCatalogProducts(catalogProducts);
    }, 150);

    this.__subscription = RouteStore.addListener(() => {
      this.setState(this.getState())
    });
  },
  componentWillUnmount(){
    this.__subscription.remove();
  },
  getInitialState(){
    return this.getState();
  },
  getState(){
    return {
      page: RouteStore.getCurrentPage()
    }
  },
  getComponentForPage(page){
    switch(page){
    case 'catalog':
      return <Catalog />
    case 'cart':
      return <Cart />;
    case 'checkout':
      return (
        <Checkout />
      )
    case 'thankyou':
      return (
        <ThankYou />
      )
    default:
      return <NotFound />
    }
  },

  render(){
    const component = this.getComponentForPage(this.state.page);
    return (
      <div className='shopping-cart'>
        { component }
      </div>
    )
  }
});

export default Shop;
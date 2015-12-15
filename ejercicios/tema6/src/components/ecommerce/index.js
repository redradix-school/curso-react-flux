import React from 'react';

import Catalog from './catalog';
import Cart from './cart';
import Checkout from './checkout';
import ThankYou from './thankyou';
import NotFound from './notfound';

//import LogStore from '../../stores/log_store';
// import CatalogStore from '../../stores/catalog_store';
// import CartStore from '../../stores/cart_store';
// import OrderStore from '../../stores/order_store';
import RouteStore from '../../stores/route_store';
//Conectar
import { connectToStores } from '../connect';

//action creators
import { receiveCatalogProducts } from '../../actions/ecommerce';
import { products as catalogProducts } from '../../data/shopping_cart';


export const Shop = React.createClass({
  propTypes: {
    page: React.PropTypes.string.isRequired
  },
  statics: {
    getStores(){
      return [RouteStore];
    },
    getState(){
      return {
        page: RouteStore.getPage()
      }
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
    const component = this.getComponentForPage(this.props.page);
    return (
      <div className='shopping-cart'>
        { component }
      </div>
    )
  }
});

export default connectToStores(Shop);
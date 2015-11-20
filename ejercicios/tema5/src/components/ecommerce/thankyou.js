import React, { PropTypes } from 'react';
import Header from './header';
import OrderStore from '../../stores/order_store';
import { Link } from 'react-router';

const ThankYou = React.createClass({
  render(){
    const orderDetails = OrderStore.getDetails();

    return (
      <div className="thank-you">
      <Header text={'Gracias por tu compra ' + orderDetails.firstName } />
      <p>Te llegará en breve a { orderDetails.address }</p>
      <p><Link to="/" className="button">Volver a la tienda</Link></p>
    </div>
    )
  }
});

export default ThankYou;
import React, { PropTypes } from 'react';
import Header from './header';

const ThankYou = React.createClass({
  handleBackClick(e){
    e.preventDefault();
    setPage('catalog');
  },
  render(){
    //TODO: get order details from Stores

    return (
      <div className="thank-you">
      <Header text={'Gracias por tu compra ' + orderDetails.firstName } />
      <p>Te llegará en breve a { orderDetails.address }</p>
      <p><button className="button" onClick={ this.handleBackClick }>Volver a la tienda</button></p>
    </div>
    )
  }
});

export default ThankYou;
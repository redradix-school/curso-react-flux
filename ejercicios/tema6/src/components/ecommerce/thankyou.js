import React, { PropTypes } from 'react';
import Header from './header';

export const ThankYou = React.createClass({
  propTypes: {
    orderDetails: PropTypes.shape({
      firstName: PropTypes.string,
      lastName: PropTypes.string,
      address: PropTypes.string
    })
  },
  getDefaultProps(){
    return {
      orderDetails: {
        firstName: '',
        lastName: '',
        address: ''
      }
    }
  },
  handleBackClick(e){
    e.preventDefault();
    setPage('catalog');
  },
  render(){

    const orderDetails = this.props.orderDetails;
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
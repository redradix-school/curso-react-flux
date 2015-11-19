import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import Header from './header';
import CartItem from './cart_item';

import CartStore from '../../stores/cart_store';
import { connectToStores } from '../connect';
import { changeQty, removeFromCart, setPage } from '../../actions/ecommerce';

const Cart = React.createClass({
  statics: {
    getStores(){
      return [CartStore];
    },
    getState(){
      return {
        items: CartStore.getCartItems()
      }
    }
  },
  calculateTotal(){
    return this.props.items.reduce((acc, item) => {
      return acc + (item.quantity * item.price);
    }, 0).toFixed(2);
  },
  handleBack(e){
    e.preventDefault();
    setPage('catalog');
  },
  handleCheckout(e){
    e.preventDefault();
    setPage('checkout');
  },
  render(){
    const cartItems = this.props.items.map(item =>
      <CartItem key={item.id} product={item} />);

    return (
      <div className='cart'>
        <Header text='Tu compra' />
        <div className='cart-contents'>
          <table>
            <thead>
              <tr>
                <th className="qty">Cant</th>
                <th className="description">Producto</th>
                <th className="unit-price">Precio</th>
                <th className="subtotal">Total</th>
                <th className="actions"></th>
              </tr>
            </thead>
            <tbody>
              { cartItems }
              <tr className='summary'>
                <td colSpan="4" className="total">
                  { this.calculateTotal() } &euro;
                </td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="footer">
          <Link to="/" className="button">Seguir comprando</Link>
          { cartItems.length === 0 ? null : <Link className="button" to="/checkout">Finalizar compra</Link> }
        </div>
      </div>
    )
  },
});

const connectedCart = connectToStores(Cart);
export default connectedCart;

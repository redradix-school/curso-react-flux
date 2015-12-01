import React, { PropTypes } from 'react';
import Header from './header';
import StoreMixin from '../store_mixin';
import OrderStore from '../../stores/order_store';
import { validateOrder, setPage } from '../../actions/ecommerce';

//stateless component - represents a form field row
//expected props: label - text, error - null or errorMessage, children - form control(s)
const FormItem = (props) => (
  <div className='row'>
    <div className='col one-third'><label>{ props.label }</label></div>
    <div className='col two-thirds'>
      { props.children }
      <span className={ props.error ? 'error-text' : 'hidden '}>
        { props.error }
      </span>
    </div>
  </div>
);

const Checkout = React.createClass({
  mixins: [StoreMixin([OrderStore])],
  getState(){
    return {
      errors: OrderStore.getOrderErrors()
    }
  },
  getInitialState(){
    return {
      firstName: '',
      lastName: '',
      email: '',
      address: '',
      errors: {}
    };
  },
  handleFieldChange(name){
    return (e) => {
      e.preventDefault();
      let newState = {};
      newState[name] = e.target.value;
      this.setState(newState);
    }
  },
  handleGoBack(e){
    e.preventDefault();
    setPage('cart');
  },
  handleSubmit(e){
    e.preventDefault();
    validateOrder(Object.assign({}, this.state));
  },
  render(){
    const errors = this.state.errors;

    return (
      <div className='checkout'>
        <Header text='Checkout' />
        <div className='checkout-form'>
          <form>
          <FormItem label='Nombre' error={ errors.firstName || null }>
            <input type="text" name="firstName"
              className={ errors.firstName ? 'error' : ''}
              value={ this.state.firstName }
              onChange={this.handleFieldChange('firstName')} />
          </FormItem>

          <FormItem label='Apellido' error={ errors.lastName || null }>
              <input type="text" name="lastName"
                className={ errors.firstName ? 'error' : ''}
                value={ this.state.lastName }
                onChange={this.handleFieldChange('lastName')} />
          </FormItem>
          <FormItem label='Email' error={ errors.email || null }>
              <input type="text" name="email"
                className={ errors.firstName ? 'error' : ''}
                value={ this.state.email }
                onChange={this.handleFieldChange('email')} />
          </FormItem>
          <FormItem label='Dirección' error={ errors.address || null }>
              <textarea
                className={ errors.firstName ? 'error big' : 'big'}
                value={ this.state.address }
                onChange={this.handleFieldChange('address')} />
          </FormItem>
          <div className="row">
            <div className="col one-whole">
              <button className="button" onClick={ this.handleGoBack }>Volver al carrito</button>
              <button className="button" onClick={ this.handleSubmit }>Finalizar</button>
            </div>
          </div>
          </form>
        </div>
      </div>
    )
  }
});

export default Checkout;
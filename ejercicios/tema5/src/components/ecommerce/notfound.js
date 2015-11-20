import React, { PropTypes } from 'react';
import Header from './header';
import { Link } from 'react-router';

const NotFound = React.createClass({
  render(){
    return (
      <div className='not-found'>
        <Header text='Page not found' />
        <p>Ooops! Not ready yet</p>
        <p><Link to="/" className='button'>Back to Shop</Link></p>
      </div>
    )
  }
});
export default NotFound;
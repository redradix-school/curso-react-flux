import React from 'react';
import CounterStore from '../stores/counter_store';
import { connectToStores } from './connect';
import { increment } from '../actions/counter';

const Counter = React.createClass({
  statics: {
    getStores(){
      return [CounterStore];
    },
    getState(){
      return {
        clicks: CounterStore.getCounter()
      }
    },
  },
  propTypes: {
    clicks: React.PropTypes.number.isRequired
  },
  handleClick(e){
    increment();
  },
  render(){
    return (
      <div>
        <h1>Counter</h1>
        <p>You have clicked { this.props.clicks } times</p>
        <p><button onClick={ this.handleClick }>Click</button></p>
      </div>
    )
  }
});

export default connectToStores(Counter);
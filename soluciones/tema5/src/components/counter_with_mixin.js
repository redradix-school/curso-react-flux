import React from 'react';
import CounterStore from '../stores/counter_store';
import StoreMixin from './store_mixin';
import { increment } from '../actions/counter';

const Counter = React.createClass({
  mixins: [
    StoreMixin([CounterStore])
  ],
  getState(){
    return {
      clicks: CounterStore.getCounter()
    }
  },
  getInitialState(){
    return { clicks: 0 }
  },
  handleClick(e){
    increment();
  },
  render(){
    return (
      <div>
        <h1>Counter</h1>
        <p>You have clicked { this.state.clicks } times</p>
        <p><button onClick={ this.handleClick }>Click</button></p>
      </div>
    )
  }
});

export default Counter;
import React from 'react';
import CounterStore from '../stores/counter_store';
import { increment } from '../actions/counter';

const Counter = React.createClass({
  componentDidMount(){
    this._subscription = CounterStore.addListener(this.getState);
    this.getState();
  },
  componentWillUnmount(){
    this._subscription.remove();
  },
  getInitialState(){
    return {
      clicks: CounterStore.getCounter()
    }
  },
  getState(){
    this.setState({
      clicks: CounterStore.getCounter()
    })
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
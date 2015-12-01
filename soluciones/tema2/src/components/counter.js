import React from 'react';

const buttonStyle = {
  fontFamily: 'Geneva, sans-serif',
  padding: '10px 8px',
  background: '#39f',
  color: '#fff',
  fontWeight: 'bold',
  fontSize: '13px'
};

const Counter = React.createClass({
  getInitialState(){
    return {
      clicks: 0
    }
  },
  handleClick(e){
    this.setState({ clicks: this.state.clicks+1 });
  },
  render(){
    return (
      <div>
        <h1>Contador</h1>
        <button style={ buttonStyle } onClick={ this.handleClick }>Haz click aquí</button>
        <p>Has hecho click { this.state.clicks } veces</p>
      </div>
    )
  }
});

export default Counter;
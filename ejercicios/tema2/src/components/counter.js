import React from 'react';

const buttonStyle = {
  fontFamily: 'Geneva, sans-serif',
  padding: '10px 8px',
  background: 'green',
  color: '#fff',
  fontWeight: 'bold',
  fontSize: '13px'
};

const Counter = React.createClass({
  getInitialState(){
    //TODO
  },
  render(){
    return (
      <div>
        <h1>Contador</h1>
        <button style={ buttonStyle }>Haz click aquí</button>
        <p>Has hecho click X veces</p>
      </div>
    )
  }
});

export default Counter;
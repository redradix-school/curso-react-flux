import React from 'react';
const buttonStyle = {
  fontFamily: 'Helvetica, Geneva, sans-serif',
  fontSize: 14,
  backgroundColor: '#f93',
  color: '#fff',
  padding: '10px',
  fontWeight: 'bold',
  borderRadius: 8
};

const HolaMundo = React.createClass({
  getInitialState: function() {
    return {
      clicks: 0
    };
  },
  handleClick(e){
    this.setState({clicks: this.state.clicks+1});
  },
  render(){
    return (
      <div>
        <h1>Hola Mundo con contador carahuevo!</h1>
        <button style={buttonStyle} onClick={this.handleClick}>Click me</button>
        <p>{ this.state.clicks } clicks</p>
      </div>
    )
  }
});

export default HolaMundo;
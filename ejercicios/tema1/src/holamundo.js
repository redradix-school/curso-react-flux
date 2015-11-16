import React from 'react';

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
        <h1>Hola mundo</h1>
        <button onClick={this.handleClick}>Click me</button>
        <p>{ this.state.clicks } clicks</p>
      </div>
    )
  }
});

export default HolaMundo;
import React from 'react';

const RandomNumber = (props) => <li>{ props.number }</li>;

const RandomList = React.createClass({
  generateRandomNumbers(){
    let numbers = [];
    for(let i=0; i < this.props.count; i++)
      numbers.push(Math.floor(Math.random()*10));
    return numbers;
  },
  getDefaultProps(){
    return {
      count: 10
    }
  },
  getInitialState(){
    return {
      numbers: this.generateRandomNumbers()
    }
  },
  handleClick(){
    this.setState({ numbers: this.generateRandomNumbers() })
  },
  render(){
    const numbers = this.state.numbers.map((n,index) => { return <RandomNumber key={index} number={n} />} );
    return(
      <div>
        <p>Números aleatorios: <button onClick={this.handleClick}>Regenerar</button></p>
        <ul>
          {numbers}
        </ul>
      </div>
    )
  }

});

export default RandomList;
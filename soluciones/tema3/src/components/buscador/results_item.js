import React from 'react';

const ResultsItem = React.createClass({
  propTypes: {
    name: React.PropTypes.string.isRequired,
    actor: React.PropTypes.string.isRequired,
    seasons: React.PropTypes.arrayOf(React.PropTypes.number).isRequired,
    alive: React.PropTypes.bool.isRequired
  },
  shouldComponentUpdate(){
    return false;
  },
  render(){
    return (
      /* TODO */
    )
  }
});

export default ResultsItem;
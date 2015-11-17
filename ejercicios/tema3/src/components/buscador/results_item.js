import React from 'react';

const ResultsItem = React.createClass({
  propTypes: {
    name: React.PropTypes.string.isRequired,
    actor: React.PropTypes.string.isRequired,
    seasons: React.PropTypes.arrayOf(React.PropTypes.number).isRequired,
    alive: React.PropTypes.bool.isRequired
  },
  render(){
    return (
      <tr>
        <td>{ this.props.name }</td>
        <td>{ this.props.actor }</td>
        <td className="center">{ this.props.seasons.join(', ') }</td>
        <td className="center">{ this.props.alive ? "Sí" : "No" }</td>
      </tr>
    )
  }
});

export default ResultsItem;
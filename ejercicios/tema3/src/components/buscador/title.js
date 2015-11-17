import React from 'react';

const Title = React.createClass({
  propTypes: {
    text: React.PropTypes.string.isRequired
  },
  render(){
    return (
      <div className='search-title'>
        <div className='row'>
          <h1>{ this.props.text }</h1>
        </div>
      </div>
    )
  }
});

export default Title;
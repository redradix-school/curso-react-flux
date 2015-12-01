import React from 'react';

const ListItem = React.createClass({
  render(){
    return (
      <div>Soy uno más</div>
    )
  }
});

const Lista = React.createClass({
  render(){
    var items = [];
    for(var i=0; i < 10; i++)
      items.push(<ListItem key={i} />);

    return (
      <div>
        { items }
      </div>
    )
  }
});

module.exports = Lista;
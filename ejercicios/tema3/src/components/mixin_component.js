import React from 'react';

const notifyUpdateMixin = {
  componentDidUpdate: function(prevProps, prevState) {
    console.log('Component updated!');
  },
  customMethod: function(text){
    alert(text)
  }
}

const mixinWithOptions = function(n){
  return {
    componentDidMount: function() {
      console.log('Your component mixin has value', n);
    }
  }
}


const MixinComponent = React.createClass({
  mixins: [notifyUpdateMixin, mixinWithOptions(25)],
  getInitialState: function() {
    return {
      clicks : 0
    };
  },
  handleClick: function(e){
    this.customMethod('Boo!');
    this.setState({ clicks: this.state.clicks+1 });
  },
  render: function(){
    return (
      <div>
        <button onClick={ this.handleClick }>Click me</button>
        <p>Has hecho click { this.state.clicks } veces</p>
      </div>
    )
  }
});

export default MixinComponent;
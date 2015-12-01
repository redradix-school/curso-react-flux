'use strict';

var React = require('react');
var utils = require('../lib/utils');


//Componente del encabezado
var Header = React.createClass({
  render: function(){
    return (
    );
  }
});

//Componente de la pantalla
var Screen = React.createClass({
  propTypes: {
    time: React.PropTypes.number.isRequired
  },
  render: function(){
    var parts = utils.extractTimeParts(this.props.time);
    return (
    );
  }
});

//Componente de los botones
var Buttons = React.createClass({
  propTypes: {
    onStart: React.PropTypes.func.isRequired,
    onStop: React.PropTypes.func.isRequired
  },
  render: function(){
    return (
    );
  }
});

//Componente "padre", el crónometro en si
var Cronometro = React.createClass({
  getInitialState: function() {
    return {
      ellapsedTime: 0,
      isRunning: false
    };
  },
  handleStart: function(e){

  },
  handleStop: function(e){
  },
  render: function() {
    return (
    );
  }
});

module.exports = Cronometro;

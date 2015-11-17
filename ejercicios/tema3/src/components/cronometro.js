'use strict';

var React = require('react');
var utils = require('../../lib/utils');


//Componente del encabezado
var Header = React.createClass({
  render: function(){
    return (
      <div className="header">
        <h2>Cronómetro</h2>
      </div>
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
      <div className="timer">
        <span className="timer-hours">{parts.hours}</span>:
        <span className="timer-minutes">{parts.minutes}</span>:
        <span className="timer-seconds">{parts.seconds}</span>.
        <span className="timer-mseconds">{parts.milliseconds}</span>
      </div>
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
      <div className="actions">
        <button onClick={this.props.onStop}>STOP</button>
        <button onClick={this.props.onStart}>START</button>
      </div>
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
    e.preventDefault();
    if(this.state.isRunning){
      return;
    }

    var now = new Date().getTime();
    this.interval = setInterval(function(){
      this.setState({ ellapsedTime: +new Date()-now });
    }.bind(this), 100);

    this.setState({ isRunning: true });
  },
  handleStop: function(e){
    e.preventDefault();
    if(this.state.isRunning){
      clearInterval(this.interval);
      this.setState({ isRunning: false });
    }
    else {
      //double stop sets the chrono back to 0
      this.setState({ ellapsedTime: 0 });
    }
  },
  render: function() {
    return (
      <div className="crono">
        <Header />
        <div className="content">
          <Screen time={ this.state.ellapsedTime }/>
          <Buttons
            onStart={ this.handleStart }
            onStop={ this.handleStop } />
        </div>
      </div>
    );
  }
});

module.exports = Cronometro;

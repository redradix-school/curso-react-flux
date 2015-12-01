import React from 'react';
import ReactDOM from 'react-dom';
import HelloWorld from './components/hello_world';
import Lista from './components/lista';
import HelloWorldProps from './components/hello_world_props';
import Counter from './components/counter';

window.onload = function(){
  //HelloWorld sample
  //ReactDOM.render(<HelloWorld />, document.getElementById('app'));

  //Lista sample
  ReactDOM.render(<Lista />, document.getElementById('app'));

  //HelloWorld with prop validation
  //ReactDOM.render(<HelloWorldProps name='Barbarroja' />, document.getElementById('app'));

  //Counter
  //ReactDOM.render(<Counter />, document.getElementById('app'));
}
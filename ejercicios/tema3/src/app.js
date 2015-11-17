import React from 'react';
import ReactDOM from 'react-dom';
//ejercicios
import Cronometro from './components/cronometro';

window.onload = function(){
  ReactDOM.render(<Cronometro />, document.getElementById('app'));
}

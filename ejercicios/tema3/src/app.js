import React from 'react';
import ReactDOM from 'react-dom';
//ejercicios
import Cronometro from './components/cronometro';
import Buscador from './components/buscador';

window.onload = function(){
  ReactDOM.render(<Buscador />, document.getElementById('app'));
}

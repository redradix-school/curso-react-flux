import React from 'react';
import { Router, Route, IndexRoute, Link } from 'react-router';
import { Routes } from './universal_routes';
import { createHistory } from 'history';
// import createHistory from 'history/lib/createHistory'

const history = createHistory({ queryKey: false });


const App = React.createClass({
  render(){
    return (
      <Router history={ history } routes={ Routes } />
    );
  }
});

export default App;
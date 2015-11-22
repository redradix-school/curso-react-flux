import React from 'react';
import { Router, Route, IndexRoute, Link } from 'react-router';

//universal_routes
const Layout = React.createClass({
  render(){
    return (
      <div>
        <h1>My App</h1>
        { this.props.children }
      </div>
    )
  }
});

const Home = (props) => (
  <div>
    <h2>Home page</h2>
    <p>Go to <Link to="/page">another page</Link></p>
  </div>
);

const Page = (props) => (
  <div>
    <h2>Another page</h2>
    <p>Go <Link to='/'>back to home</Link></p>
  </div>
);

function enterHook(nextState){
  console.log('enter hook called!');
}

export const Routes = [
  {
    path: '/',
    component: Layout,
    onEnter: enterHook,
    indexRoute: { component: Home },
    childRoutes: [
      { path: 'page', component: Page }
    ]
  }
]

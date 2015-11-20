import React from 'react';
import { Router, Route, IndexRoute, Link } from 'react-router';
// import createBrowserHistory from 'history/lib/createBrowserHistory';
// import createHistory from 'history/lib/createHistory'

// const history = createBrowserHistory();

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

export const Routes = [
  {
    path: '/',
    component: Layout,
    indexRoute: { component: Home },
    childRoutes: [
      { path: 'page', component: Page }
    ]
  }
];

const App = React.createClass({
  render(){
    return (
      <Router>{Routes}</Router>
    );
  }
});

export default App;
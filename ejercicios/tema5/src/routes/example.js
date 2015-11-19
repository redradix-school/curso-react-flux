import React from 'react';
import createHistory from 'history/lib/createBrowserHistory';
import { Router, Route, IndexRoute, Link } from 'react-router';


let history = createHistory({
  queryKey: false
});

function loadContactAsync(nextState, replaceState, done){
  console.log('Loading data for contact', nextState.params.id);
  setTimeout(() => {
    console.log('Data fetched!');
    done();
  }, 500);
}

function loadContact(nextState, replaceState){
  alert('Fetch data por contact' + nextState.params.id);
}

const Layout = React.createClass({
  render(){
    let props = this.props;
    console.log(props);
    return (
      <div>
        <h1>My super duper app</h1>
        <nav>
          <Link to='/'>Home</Link> |
          <Link to='/about'>About</Link> |
          <Link to='/about/history'>About > History</Link> |
          <Link to='/contact/1'>Contact ID 1</Link> |
          <Link to='/contact/4'>Contact ID 4</Link>
        </nav>
        { props.children }
      </div>
    );
  }
});


const Home = (props) => (
  <div>
    <h2>Home</h2>
    <p>This is the home</p>
  </div>
);

const About = (props) => (
  <div>
    <h2>About</h2>
    <p>This is the about page</p>
    { props.children }
  </div>
);

const NestedAbout = (props) => (
  <div>
    <h3>History</h3>
    And this is a nested page inside About
  </div>
);

const Contact = (props) => (
  <div>
    <h2>Contact details</h2>
    <p>This is the page for contact {props.params.id}</p>
  </div>
);

const ExampleRouter = React.createClass({
  render(){
    return (
      <Router history={ history }>
        <Route path="/" component={Layout}>
          <IndexRoute component={Home} />
          <Route path="about" component={About}>
            <Route path="history" component={ NestedAbout } />
          </Route>
          <Route onEnter={ loadContactAsync } path="contact/:id" component={Contact} />
        </Route>
      </Router>
    )
  }
});

export default ExampleRouter;
import React from 'react';
import createHistory from 'history/lib/createHashHistory';
import { Router, Route, IndexRoute, Link } from 'react-router';


let history = createHistory({
  queryKey: false
});

function loadContactAsync(id){
  console.log('Loading data for contact', id);
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
    return (
      <div>
        <h1>My super duper app</h1>
        <nav>
          <Link to='/'>Home</Link> |
          <Link to='/about'>About</Link> |
          <Link to='/about/history'>About > History</Link> |
          <Link to='/contacts'>Contacts</Link> |
          <Link to='/contacts/4'>Contact ID 4</Link>
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

const Contacts = (props) => (
  <div>
    <h2>Contacts</h2>
    <p>Cosas comunes a contactos...</p>
    { props.children }
  </div>
);

const Contact = (props) => (
  <div>
    <h3>Contact details</h3>
    <p>This is the page for contact {props.params.id}</p>
  </div>
);

const ExampleRouter = React.createClass({
  loadContact(nextState){
    //fetch contact from server
    loadContactSync(nextState.params.id);
  },
  render(){
    return (
      <Router history={ history }>
        <Route path="/" component={Layout}>
          <IndexRoute component={Home} />
          <Route path="contacts" component={ Contacts }>
            <Route path=":id" onEnter={ this.loadContact } component={Contact} />
          </Route>
        </Route>
      </Router>
    )
  }
});

export default ExampleRouter;
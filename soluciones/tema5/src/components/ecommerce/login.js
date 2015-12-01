import React from 'react';
import Header from './header';
import { login } from '../../actions/ecommerce';

const Login = React.createClass({
  getInitialState(){
    return {
      pending: false
    }
  },
  handleLogin(){
    const email = this.refs.email.value,
          pwd = this.refs.pwd.value;

    this.setState({ pending: true });
    login(email, pwd, this.props.location.query.returnPath);
  },
  render(){
    return (
      <div className='login'>
        <Header text="Login" />
        <p>
          Email<br />
          <input type="text" ref="email" placeholder="Email" />
        </p>
        <p>
          Contraseña<br /> <input type="password" ref="pwd" />
        </p>
        <p>
          <button className="button"
            disabled={ this.state.pending }
            onClick={ this.handleLogin }>{ this.state.pending ? "Please wait..." : "Login" }</button>
        </p>
      </div>
    )
  }
});

export default Login;
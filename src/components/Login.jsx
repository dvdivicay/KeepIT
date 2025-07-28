import React from 'react';
import Input from './Input';

function Login() {
  return (
    <div className="login">
      <h1>Login</h1>
      <form className='login-form'>
          <Input type="text" placeholder="Username" />
          <Input type="password" placeholder="Password" />
          <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
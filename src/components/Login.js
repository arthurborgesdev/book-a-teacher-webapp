import React, { useState } from 'react';
import {
  useHistory,
  useLocation,
  Redirect,
} from 'react-router-dom';
import { useAuth } from './authentication/ProvideAuth';

import style from './login.module.scss';

const Login = () => {
  const history = useHistory();
  const location = useLocation();
  const auth = useAuth();

  const { from } = location.state || { from: { pathname: '/' } };

  const [username, setUsername] = useState('');

  const usernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const validatedUsername = username.trim();
    if (validatedUsername) {
      auth.signin(validatedUsername, () => {
        history.replace(from);
      });
    }
  };

  return auth.user ? (
    <Redirect
      to={{
        pathname: '/',
        state: { from: location },
      }}
    />
  )
    : (
      <div className={style.container}>
        <h1>BOOK A TEACHER</h1>
        <form onSubmit={handleFormSubmit}>
          <input type="text" value={username} onChange={usernameChange} placeholder="Username" />
          <input type="submit" value="Enter" />
        </form>
      </div>
    );
};

export default Login;

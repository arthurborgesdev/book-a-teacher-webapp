import React, { useState } from 'react';

import setToLocalStorage from '../scripts/storage';

const Login = () => {
  const [username, setUsername] = useState('');

  const usernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (username.trim()) {
      setToLocalStorage(username);
    }
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <h1>Login</h1>
        Username:
        <input type="text" value={username} onChange={usernameChange} />
        <input type="submit" value="Enter" />
      </form>
    </div>
  );
};

export default Login;

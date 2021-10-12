import React, { useContext, createContext, useState } from 'react';
import PropTypes from 'prop-types';
import setToLocalStorage from '../../scripts/storage';

const fakeAuth = {
  isAuthenticated: false,
  signin(cb) {
    fakeAuth.isAuthenticated = true;
    setTimeout(cb, 100);
  },
  signout(cb) {
    fakeAuth.isAuthenticated = false;
    setTimeout(cb, 100);
  },
};

const useProvideAuth = () => {
  const [user, setUser] = useState(null);

  const signin = (username, cb) => fakeAuth.signin(() => {
    setUser(username);
    setToLocalStorage(username);
    cb();
  });

  const signout = (cb) => fakeAuth.signout(() => {
    setUser(null);
    setToLocalStorage(null);
    cb();
  });

  return {
    user,
    signin,
    signout,
  };
};

const authContext = createContext();

const ProvideAuth = ({ children }) => {
  const auth = useProvideAuth();

  return (
    <authContext.Provider value={auth}>
      {children}
    </authContext.Provider>
  );
};

export const useAuth = () => useContext(authContext);

ProvideAuth.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProvideAuth;

import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useAuth } from './ProvideAuth';

const PrivateRoute = ({ children, path }) => {
  const auth = useAuth();
  console.log(auth);
  return (
    <Route
      path={path}
      render={({ location }) => (
        auth.user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location },
            }}
          />
        )
      )}
    />
  );
};

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
  path: PropTypes.string.isRequired,
};

export default PrivateRoute;

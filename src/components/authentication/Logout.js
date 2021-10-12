import React from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from './ProvideAuth';

const Logout = () => {
  const history = useHistory();
  const auth = useAuth();

  return auth.user && (
    <p>
      <button
        type="button"
        onClick={() => {
          auth.signout(() => history.push('/login'));
        }}
      >
        Sign out
      </button>
    </p>
  );
};

export default Logout;

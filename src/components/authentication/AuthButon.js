import React from 'react';
import { useHistory } from 'react-router';

const AuthButton = () => {
  const history = useHistory();
  const auth = useAuth();

  return auth.user ? (
    <p>
      Welcome!{" "}
      <button
        onClick={() => {
          auth.signout(() => history.push("/login"));
        }}
      >
        Sign out
      </button>
    </p>
  ) : (
    <p>You are not logged in.</p>
  );
}

export default AuthButton;

import React from 'react';

const withAuthentication = (Component) => {
  const isAuthenticated = true; // replace with actual authentication logic

  const AuthenticatedComponent = (props) => {
    if (isAuthenticated) {
      return <Component {...props} />;
    } else {
      return <div>You must be logged in to view this page.</div>;
    }
  };

  return AuthenticatedComponent;
};

export default withAuthentication;

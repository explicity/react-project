import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = ({ component: Component, roles, ...rest }) => {

  return (
    <Route
      {...rest}
      render={(props) => {
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (!currentUser) {
          return (
            <Redirect
              to={{ pathname: '/', state: { from: props.location } }}
            />
          );
        }

        if (roles && roles.indexOf(currentUser.role) === -1) {
          return <Redirect to={{ pathname: '/' }} />;
        }

        return <Component {...props} />;
      }}
    />
  );
};

export default PrivateRoute;

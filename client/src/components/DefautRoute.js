import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const DefaultRoute = ({ component: Component, ...rest }) => {
  const currentUser = JSON.parse(localStorage.getItem('currentUser'));
  if (currentUser) return <Route {...rest} render={props => <Component {...props} />} />;
  return <Redirect to="/login" />;
};

export default DefaultRoute;

import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const DefaultRoute = ({ component: Component }) => {
  const currentUser = JSON.parse(localStorage.getItem('currentUser'));
  if (currentUser) return <Route render={props => <Component {...props} />} />;
  return <Redirect to="/login" />;
};

export default DefaultRoute;

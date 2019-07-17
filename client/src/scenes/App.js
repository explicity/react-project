import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { history, Role } from '../helpers';
import PrivateRoute from '../components/PrivateRoute';

import Chat from './chat/Chat';
import Login from './login/Login';
import UserList from './userList/UserList';
import UserEditor from './userEditor/UserEditor';

const App = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Chat} />
        <Route path="/login" component={Login} />
        <PrivateRoute exact path="/users" roles={Role.Admin} component={UserList} />
        <PrivateRoute
          path="/users/:id"
          roles={Role.Admin}
          component={UserEditor}
        />
      </Switch>
    </Router>
  );
};

export default App;

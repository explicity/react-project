import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { history, Role } from '../helpers';
import PrivateRoute from '../components/PrivateRoute';

import Chat from './chat/Chat';
import Login from './login/Login';
import UserList from './userList/UserList';
import UserEditor from './userEditor/UserEditor';
import MessageEditor from './messageEditor/MessageEditor';

const App = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/chat" component={Chat} />
        <Route path="/chat/:id" component={MessageEditor} />
        <Route path="/login" component={Login} />
        <PrivateRoute exact path="/" roles={Role.Admin} component={UserList} />
        <PrivateRoute exact path="/user" roles={Role.Admin} component={UserEditor} />
        <PrivateRoute
          path="/user/:id"
          roles={Role.Admin}
          component={UserEditor}
        />
      </Switch>
    </Router>
  );
};

export default App;

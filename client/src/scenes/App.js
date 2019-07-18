import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { history, Role } from '../helpers';
import { PrivateRoute, DefaultRoute } from '../components';

import Chat from './chat/Chat';
import Login from './login/Login';
import UserList from './userList/UserList';
import UserEditor from './userEditor/UserEditor';
import MessageEditor from './messageEditor/MessageEditor';

const App = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/login" component={Login} />
        <DefaultRoute exact path="/chat" component={Chat} />
        <DefaultRoute path="/chat/:id" component={MessageEditor} />
        <PrivateRoute exact path="/" roles={Role.Admin} component={UserList} />
        <PrivateRoute
          exact
          path="/user"
          roles={Role.Admin}
          component={UserEditor}
        />
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

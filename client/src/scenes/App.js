import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { history, Role } from '../helpers';

import Chat from './chat/Chat';
import PrivateRoute from '../components/PrivateRoute';
import Login from './login/Login';
import UserList from './userList/UserList';
class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={Chat} />
          <Route path="/login" component={Login} />
          <PrivateRoute
            path="/userlist"
            roles={Role.Admin}
            component={UserList}
          />
        </Switch>
      </Router>
    );
  }
}

export default App;

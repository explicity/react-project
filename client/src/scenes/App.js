import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Chat from './chat/Chat';
import Login from './login/Login';
import UserList from './userList/UserList';
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null,
      isAdmin: false
    };
  }

  render() {
    const { currentUser, isAdmin } = this.state;

    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Chat} />
          <Route path="/login" component={Login} />
        </Switch>
      </Router>
    );
  }
}

export default App;

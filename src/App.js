import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Chat from './scenes/Chat';

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Chat} />
    </Switch>
  </Router>
);

export default App;

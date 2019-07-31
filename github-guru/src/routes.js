import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import Commits from './components/Commits';
// import List from './components/List';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Main} />
    <Route path="/commits" component={Commits} />
  </Switch>
);

export default Routes;

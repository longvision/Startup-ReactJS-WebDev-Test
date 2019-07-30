import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
// import Commits from './components/Commits';
// import List from './components/List';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Main} />
      {/* <Route path="/commits/repo" component={Commits} /> */}
    </Switch>
  </BrowserRouter>
);

export default Routes;

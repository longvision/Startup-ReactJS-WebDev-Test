import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import Commits from './components/Commits';

//Change basename prop to send to production as on https://github.com/gitname/react-gh-pages/issues/3
const Routes = () => (
  <Switch>
    <BrowserRouter basename="/Startup-ReactJS-WebDev-Test">
      <Route exact path="/" component={Main} />
      <Route path="/commits" component={Commits} />
    </BrowserRouter>
  </Switch>
);

export default Routes;

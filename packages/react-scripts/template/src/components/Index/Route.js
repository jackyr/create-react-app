import React from 'react';
import { Route, Switch } from 'react-router-dom';
import App from './App';

export default () => (<Switch>
  <Route exact={true} path="/" component={App} />
</Switch>);

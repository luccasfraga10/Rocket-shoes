import { Route, Switch } from 'react-router-dom';

import React from 'react';
import Cart from './Pages/Cart';
import Home from './Pages/Home';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/cart" component={Cart} />
    </Switch>
  );
}

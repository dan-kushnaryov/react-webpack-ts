import * as React from 'react';
import { Route, Switch } from 'react-router';
import { hot } from 'react-hot-loader';

import ImagesGreed from './components/ImagesGrid';

export const App = hot(module)(() => (
  <Switch>
    <Route path="/" exact>
      <ImagesGreed />
    </Route>

    <Route path="/test" component={() => <p>Hello</p>} />
  </Switch>
));

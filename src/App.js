import React, { lazy, Suspense } from 'react';
import { Grommet } from 'grommet';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './styles/App.module.css';
import { APP_THEME } from './styles/Theme';

const Main = lazy(() => import('./routes/Main'));
const Admin = lazy(() => import('./routes/Admin'));
const Login = lazy(() => import('./routes/Login'));
const Logout = lazy(() => import('./routes/Logout'));

const App = _props => {
  return (
    <Grommet theme={APP_THEME}>
      <Router>
        <Suspense fallback={<div>Page is loading...</div>}>
          <Switch>
            <Route path={'/admin'}>
              <Admin />
            </Route>
            <Route path={'/login'}>
              <Login />
            </Route>
            <Route path={'/logout'}>
              <Logout />
            </Route>
            <Route path={'/'}>
              <Main />
            </Route>
          </Switch>
        </Suspense>
      </Router>
    </Grommet>
  );
};

export default App;

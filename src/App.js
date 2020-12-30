import React from 'react';
import { Grommet } from 'grommet';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Main from './routes/Main';
import Admin from './routes/Admin';
import Login from './routes/Login';
import Logout from './routes/Logout';
import './styles/App.module.css';
import { APP_THEME } from './styles/Theme';

const App = _props => {
  return (
    <Grommet theme={APP_THEME}>
      <Router>
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
      </Router>
    </Grommet>
  );
};

export default App;

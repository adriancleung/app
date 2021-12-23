import React, { lazy, Suspense } from 'react';
import { Grommet } from 'grommet';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/App.module.css';
import { APP_THEME } from './styles/Theme';
import Loading from './components/common/Loading';

const Main = lazy(() => import('./routes/Main'));
const Admin = lazy(() => import('./routes/Admin'));
const Login = lazy(() => import('./routes/Login'));
const Logout = lazy(() => import('./routes/Logout'));
const Pushie = lazy(() => import('./routes/Pushie'));

const App = _props => {
  return (
    <Grommet theme={APP_THEME}>
      <Router>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path={'/admin'} element={<Admin />} />
            <Route path={'/login'} element={<Login />} />
            <Route path={'/logout'} element={<Logout />} />
            <Route path={'/pushie/*'} element={<Pushie />} />
            <Route exact path={'/'} element={<Main />} />
          </Routes>
        </Suspense>
      </Router>
    </Grommet>
  );
};

export default App;

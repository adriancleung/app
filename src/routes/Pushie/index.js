import React, { lazy, Suspense } from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import Loading from '../../components/common/Loading';

const Pushie = lazy(() => import('./Pushie'));
const Privacy = lazy(() => import('./Privacy'));

const PushieRoute = _props => {
  const { path } = useRouteMatch();
  return (
    <Suspense fallback={<Loading />}>
      <Switch>
        <Route exact path={path}>
          <Pushie />
        </Route>
        <Route path={`${path}/privacy`}>
          <Privacy />
        </Route>
      </Switch>
    </Suspense>
  );
};

export default PushieRoute;

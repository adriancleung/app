import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Loading from '../../components/common/Loading';

const Pushie = lazy(() => import('./Pushie'));
const Privacy = lazy(() => import('./Privacy'));

type Props = {};

const PushieRoute: React.FC<Props> = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path={'/'} element={<Pushie />} />
        <Route path={'privacy'} element={<Privacy />} />
      </Routes>
    </Suspense>
  );
};

export default PushieRoute;

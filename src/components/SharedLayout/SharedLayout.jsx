import { Suspense } from 'react';
import Header from '../Header';
import Loader from '../Loader';
const { Outlet } = require('react-router-dom');

const SharedLayout = () => {
  return (
    <div>
      <Header />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default SharedLayout;

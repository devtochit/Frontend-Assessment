import { Route, Routes } from 'react-router-dom';

import { lazyImport } from '@/utils';

const { HomePage } = lazyImport(() => import('@/features/homePage/pages'), 'HomePage');

export const HomePageRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
};

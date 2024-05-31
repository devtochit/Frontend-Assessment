import { Suspense } from 'react';

import { useRoutes } from 'react-router-dom';

import { AppLoader } from '@/components/misc';

import { privateRoutes } from './private';

export const AppRoutes = () => {
  const routes = privateRoutes;

  const element = useRoutes([...routes]);

  return <Suspense fallback={<AppLoader />}>{element}</Suspense>;
};

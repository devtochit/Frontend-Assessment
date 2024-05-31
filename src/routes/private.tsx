import { Navigate } from 'react-router-dom';

import { lazyImport } from '@/utils';

// Layouts
const { DetailedLayout } = lazyImport(() => import('@/components/layout'), 'DetailedLayout');

// Routes

const { HomePageRoutes } = lazyImport(() => import('@/features/homePage/routes'), 'HomePageRoutes');
const { DeviceInfoRoutes } = lazyImport(
  () => import('@/features/deviceInfo/routes'),
  'DeviceInfoRoutes'
);

export const privateRoutes = [
  // Home
  {
    path: '/',
    element: <DetailedLayout />,
    children: [{ path: '/', element: <HomePageRoutes /> }],
  },

  // Device Information
  {
    path: 'device',
    element: <DetailedLayout />,
    children: [
      { path: '', element: <Navigate to="info" replace /> },
      { path: '*', element: <DeviceInfoRoutes /> },
    ],
  },
];

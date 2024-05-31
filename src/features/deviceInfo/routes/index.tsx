import { Route, Routes } from 'react-router-dom';

import { lazyImport } from '@/utils';

const { DeviceInfoPage } = lazyImport(
  () => import('@/features/deviceInfo/pages'),
  'DeviceInfoPage'
);

export const DeviceInfoRoutes = () => {
  return (
    <Routes>
      <Route path=":deviceId" element={<DeviceInfoPage />} />
    </Routes>
  );
};

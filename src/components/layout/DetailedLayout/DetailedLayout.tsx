import { Suspense } from 'react';

import { Outlet } from 'react-router-dom';

import { Header } from '@/components/elements';
import { RootLayout } from '@/components/layout';
import { AppLoader } from '@/components/misc';

export const DetailedLayout = () => {
  return (
    <RootLayout>
      <Header />

      <main>
        <Suspense fallback={<AppLoader />}>
          <Outlet />
        </Suspense>
      </main>
    </RootLayout>
  );
};

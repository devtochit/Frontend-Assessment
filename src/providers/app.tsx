import type { PropsWithChildren } from 'react';

import { ErrorBoundary } from 'react-error-boundary';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router } from 'react-router-dom';

import { ErrorFallback } from '@/components/misc';
import StoreProvider from '@/store/storeProvider';
import { GlobalStyles } from '@/styles/GlobalStyles';

export const AppProvider = ({ children }: PropsWithChildren<{}>) => {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <HelmetProvider>
        <StoreProvider>
          <GlobalStyles />
          <Router>{children}</Router>
        </StoreProvider>
      </HelmetProvider>
    </ErrorBoundary>
  );
};

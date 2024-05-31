import { useEffect } from 'react';

import { AppProvider } from './providers/app';
import { AppRoutes } from './routes';
import 'react-toastify/dist/ReactToastify.css';

export const App = () => {
  useEffect(() => {
    // enable tailwindcss debug screens plugin on non-production environmeents
    if (process.env.NODE_ENV !== 'production') {
      document.body.classList.add('debug-screens');
    }
  }, []);

  return (
    <AppProvider>
      <AppRoutes />
    </AppProvider>
  );
};

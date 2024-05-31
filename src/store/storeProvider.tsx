import type { PropsWithChildren } from 'react';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { AppLoader } from '@/components/misc';
import { store, persistor } from '@/store/store';

const StoreProvider = (props: PropsWithChildren<{}>) => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={<AppLoader />}>
        {props.children}
      </PersistGate>
    </Provider>
  );
};

export default StoreProvider;

/* eslint-disable no-console */
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';
import { encryptTransform } from 'redux-persist-transform-encrypt';

import { APP } from '@/configs';

import rootReducer from './rootReducer';

const persistConfig = {
  key: 'root', // persist from whole rootReducer & get the available reducers from rootReducer
  storage,
  whitelist: ['deviceInfo', 'device'],
  transforms: [
    encryptTransform({
      secretKey: APP.REDUX_PERSIST_SECRET_KEY,
      onError: (error: any) => {
        console.error('persistConfig ~ encryptTransform', error);
      },
    }),
  ],
};

export const persistedReducer = persistReducer(persistConfig, rootReducer);

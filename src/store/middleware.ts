import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE } from 'redux-persist';

import { mainApi } from '@/api/mainApi';

// List of redux-persist actions to be ignored
// for serializableCheck on redux toolkit middleware
const ignoredActions = [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER];

export const middleware = (getDefaultMiddleware: any) => {
  return getDefaultMiddleware({
    serializableCheck: {
      ignoredActions,
    },
  }).concat([mainApi.middleware]);
};

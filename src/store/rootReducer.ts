// eslint-disable-next-line import/named
import { combineReducers } from '@reduxjs/toolkit';
import type { AnyAction } from '@reduxjs/toolkit';

import { mainApi } from '@/api/mainApi';
import deviceInfoReducer from '@/features/deviceInfo/store';

const appReducer = combineReducers({
  [mainApi.reducerPath]: mainApi.reducer,

  deviceInfo: deviceInfoReducer,
});

const rootReducer = (state: ReturnType<typeof appReducer> | undefined, action: AnyAction) => {
  return appReducer(state, action);
};

export default rootReducer;

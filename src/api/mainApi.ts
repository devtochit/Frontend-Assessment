import { createApi } from '@reduxjs/toolkit/query/react';

import { customBaseQuery } from '@/api/customBaseQuery';

export const mainApi = createApi({
  baseQuery: customBaseQuery,
  endpoints: () => ({}),
});

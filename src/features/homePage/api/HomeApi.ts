import { mainApi } from '@/api/mainApi';
import type { Phones } from '@/features/homePage/types';

export const HomeApi = mainApi.injectEndpoints({
  endpoints: (builder) => ({
    getLibrary: builder.query<Phones, void>({
      query: () => ({
        url: 'objects',
      }),
    }),
  }),
});

export const { useGetLibraryQuery } = HomeApi;

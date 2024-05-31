import { AppLoader } from '@/components/misc';
import { useGetLibraryQuery } from '@/features/homePage/api';

import { HomeLayout } from '../../components/HomeLayout';

export const HomePage = () => {
  const { data } = useGetLibraryQuery(undefined, {
    refetchOnFocus: true,
    refetchOnReconnect: true,
    refetchOnMountOrArgChange: true,
  });

  return data ? <HomeLayout phones={data} /> : <AppLoader />;
};

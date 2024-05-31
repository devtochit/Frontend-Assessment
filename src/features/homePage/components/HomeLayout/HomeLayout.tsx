import type { Phones } from '@/features/homePage/types';

import { HomePageItem } from '../homePageItem';

interface PhoneInfoProps {
  phones: Phones;
}

export const HomeLayout = ({ phones }: PhoneInfoProps) => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col">
        <p className="pl-6 text-sm md:text-lg xl:text-xl font-semibold"> </p>

        {
          //@ts-ignore
          <HomePageItem PhoneInfo={phones} />
        }
      </div>
    </div>
  );
};

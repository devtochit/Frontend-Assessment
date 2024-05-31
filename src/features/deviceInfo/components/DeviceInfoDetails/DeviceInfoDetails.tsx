import tw from 'twin.macro';

import { Button } from '@/components/elements';
import type { Phone } from '@/features/homePage/types';
import { useAppDispatch } from '@/store/hooks';

import { setDeleteModalOpen, setEditModalOpen, setOpenModal } from '../../store';

type DeviceInfoDetailsProps = {
  deviceInfo: Phone | undefined;
};

export const DeviceInfoDetails = ({ deviceInfo }: DeviceInfoDetailsProps) => {
  const { id, name, data } = deviceInfo ?? {};
  const dispatch = useAppDispatch();
  return (
    <div
      key={id}
      className="container mx-auto grid grid-cols-1 gap-y-5 gap-x-8 xl:gap-x-16 py-10 relative px-5"
      css={[tw`md:(grid-cols-2 gap-y-0) lg:grid-cols-3`]}
    >
      <div className="flex flex-col gap-y-3 text-sm md:text-lg">
        <div className="flex gap-x-3 ">
          <p className="">Name:</p>
          <p className="capitalize">{name}</p>
        </div>
        <div className=" flex flex-col gap-y-3 gap-x-3">
          {data?.['Capacity'] && <p className="capitalize">Capacity: {data?.['Capacity']}</p>}
          {data?.['capacity'] && <p>Capacity: {data?.['capacity']}</p>}
          {data?.['capacity GB'] && <p>Capacity: {data?.['capacity GB']}</p>}
          {data?.['Case Size'] && <p>Case Size: {data?.['Case Size']}</p>}
          {data?.['Color'] && <p>Color: {data?.['Color']}</p>}
          {data?.['color'] && <p>Color: {data?.['color']}</p>}
          {data?.['Cpu Model'] && <p>CPU Model: {data?.['Cpu Model']}</p>}
          {data?.['Generation'] && <p>Generation: {data?.['Generation']}</p>}
          {data?.['generation'] && <p>Generation: {data?.['generation']}</p>}
          {data?.['Harddisk Size'] && <p>Hard Disk Size: {data?.['Harddisk Size']}</p>}
          {data?.['Description'] && <p>Hard Disk Size: {data?.['Description']}</p>}
          {data?.['price'] && <p>Price: {data?.['price']}</p>}
          {data?.['Price'] && <p>Price: {data?.['Price']}</p>}
          {data?.['Screen size'] && <p>Screen Size: {data?.['Screen size']}</p>}
          {data?.['Strap Colour'] && <p>Strap Colour: {data?.['Strap Colour']}</p>}
          {data?.['year'] && <p>Year: {data?.['year']}</p>}
        </div>
      </div>
      <div className=" flex flex-col gap-3">
        <Button
          variant="tertiary"
          className=" w-[150px]"
          onClick={() => dispatch(setOpenModal(true))}
        >
          ADD
        </Button>
        <Button
          variant="tertiary"
          className=" w-[150px]"
          onClick={() => dispatch(setEditModalOpen(true))}
        >
          Edit
        </Button>
        <Button
          variant="tertiary"
          className=" w-[150px]"
          onClick={() => dispatch(setDeleteModalOpen(true))}
        >
          Delete
        </Button>
      </div>
    </div>
  );
};

import type { JSXElementConstructor, ReactElement, ReactFragment, ReactNode } from 'react';
import { useState } from 'react';

import axios from 'axios';
import type { ToastContentProps } from 'react-toastify';
import { toast, ToastContainer } from 'react-toastify';

import { useAppDispatch } from '@/store/hooks';

import { Button, Input } from '../../../../components/elements';
import { setDeleteModalOpen, setEditModalOpen } from '../../store';

export const AddDeviceInfoForm = () => {
  const dispatch = useAppDispatch();
  const notify = () => toast.success('You just added a new item');
  const Toasterror = () => toast.error('Oops, something went wrong');
  const ToastMessage = (
    message:
      | string
      | number
      | boolean
      | ReactElement<any, string | JSXElementConstructor<any>>
      | ReactFragment
      | ((props: ToastContentProps<unknown>) => ReactNode)
      | null
      | undefined
  ) => toast.info(message);
  const [formData, setFormData] = useState({
    name: '',
    data: {
      year: '',
      price: '',
      'CPU model': '',
      'Hard disk size': '',
      color: '',
    },
  });

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    if (name === 'name') {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        data: {
          ...prevData.data,
          [name]: value,
        },
      }));
    }
  };

  const isModalOpen = () => {
    dispatch(setDeleteModalOpen(false));
    dispatch(setEditModalOpen(false));
  };

  const onSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    try {
      const response = await axios.post('https://api.restful-api.dev/objects/', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      notify();
      ToastMessage(`Response from endpoint, ${response.data}`);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
      Toasterror();
    }
  };

  return (
    <div className="p-5 flex flex-col justify-center items-center text-center">
      <form
        className="flex flex-col justify-center items-center text-white gap-5"
        onSubmit={onSubmit}
      >
        <ToastContainer />
        <div className="flex flex-col gap-2 w-[450px]">
          <p className="text-2xl">You can add more details about the item</p>

          <Input
            className="text-center"
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            width="w-full"
            aria-label="Name"
          />
        </div>

        <div className="flex flex-col gap-2 w-[450px]">
          <Input
            className="text-center"
            type="text"
            id="year"
            name="year"
            value={formData.data.year}
            onChange={handleChange}
            placeholder="Year"
            width="w-full"
            aria-label="Year"
          />
        </div>

        <div className="flex flex-col gap-2 w-[450px]">
          <Input
            className="text-center"
            type="text"
            id="price"
            name="price"
            value={formData.data.price}
            onChange={handleChange}
            placeholder="Price"
            width="w-full"
            aria-label="Price"
          />
        </div>

        <div className="flex flex-col gap-2 w-[450px]">
          <Input
            className="text-center"
            type="text"
            id="CPU model"
            name="CPU model"
            value={formData.data['CPU model']}
            onChange={handleChange}
            placeholder="CPU Model"
            width="w-full"
            aria-label="CPU Model"
          />
        </div>

        <div className="flex flex-col gap-2 w-[450px]">
          <Input
            className="text-center"
            type="text"
            id="Hard disk size"
            name="Hard disk size"
            value={formData.data['Hard disk size']}
            onChange={handleChange}
            placeholder="Hard Disk Size"
            width="w-full"
            aria-label="Hard Disk Size"
          />
        </div>

        <div className="flex flex-col gap-2 w-[450px]">
          <Input
            className="text-center"
            type="text"
            id="color"
            name="color"
            value={formData.data.color}
            onChange={handleChange}
            placeholder="Color"
            width="w-full"
            aria-label="Color"
          />
        </div>

        <Button
          type="submit"
          tw="mt-4 text-center font-normal"
          width="w-full"
          variant="primary"
          onClick={isModalOpen}
        >
          Ok
        </Button>
      </form>
    </div>
  );
};

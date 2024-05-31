import { useState } from 'react';

import axios from 'axios';
import { useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

import { useAppDispatch } from '@/store/hooks';

import { Button, Input } from '../../../../components/elements';
import { setEditModalOpen, setOpenModal } from '../../store';

export const DeleteDeviceInfoForm = () => {
  const dispatch = useAppDispatch();
  const notify = () => toast.success('You just Deleted an Item');
  const Toasterror = (error: unknown) => toast.error(`${error}`);

  interface Params {
    deviceId: string;
  }
  // @ts-ignore
  const { deviceId } = useParams<Params>();

  const [formData, setFormData] = useState({
    id: deviceId || '',
  });

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const isModalOpen = () => {
    dispatch(setOpenModal(false));
    dispatch(setEditModalOpen(false));
  };

  const onSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    try {
      await axios.delete(`https://api.restful-api.dev/objects/${formData.id}`);
      notify();
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Error:', error);
      Toasterror(error);
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
          <p className="text-2xl">You can add more details about the Item</p>

          <Input
            className="text-center"
            type="number"
            id="id"
            name="id"
            value={formData.id}
            onChange={handleChange}
            placeholder="Type ID of item you wish to delete"
            width="w-full"
            aria-label="ID"
          />
        </div>

        <Button
          type="submit"
          tw="mt-4 text-center font-normal"
          width="w-full"
          variant="primary"
          onClick={isModalOpen}
        >
          {'Ok'}
        </Button>
      </form>
    </div>
  );
};

import { useParams } from 'react-router-dom';

import { Modal } from '@/components/elements';
import {
  selectDeleteModalOpen,
  selectEditModalOpen,
  selectModalOpen,
  selectSelectedDeviceInfo,
  setDeleteModalOpen,
  setEditModalOpen,
  setOpenModal,
} from '@/features/deviceInfo/store';
import { useAppSelector, useAppDispatch } from '@/store/hooks';

import { DeleteDeviceInfoForm } from '../../components/DeviceDetailsForm/DeleteDeviceform';
import { AddDeviceInfoForm } from '../../components/DeviceDetailsForm/DeviceDetailForm';
import { EditDeviceInfoForm } from '../../components/DeviceDetailsForm/EditDeviceDetailsForm';
import { DeviceInfoDetails } from '../../components/DeviceInfoDetails';
import { DeviceInfoHeader } from '../../components/DeviceInfoHeader';

export const DeviceInfoPage = () => {
  const params = useParams();
  const deviceInfo = useAppSelector(selectSelectedDeviceInfo);
  const isOpen = useAppSelector(selectModalOpen);
  const isEditOpen = useAppSelector(selectEditModalOpen);
  const isDeletedOpen = useAppSelector(selectDeleteModalOpen);
  const dispatch = useAppDispatch();
  const { deviceId = '' } = params;

  const deviceThatExists = deviceInfo?.find((device) => device.id === deviceId);

  return (
    deviceInfo && (
      <div className="flex flex-col">
        <DeviceInfoHeader />
        <DeviceInfoDetails deviceInfo={deviceThatExists} />
        <Modal
          isOpen={isOpen}
          closeModal={() => dispatch(setOpenModal(false))}
          hasCloseButton={true}
        >
          <h1> Create A new Item</h1>
          <AddDeviceInfoForm />
        </Modal>
        <Modal
          isOpen={isEditOpen}
          closeModal={() => dispatch(setEditModalOpen(false))}
          hasCloseButton={true}
        >
          <h1> NB: you cant Edit 1-13 you have to create yours cheers</h1>
          <EditDeviceInfoForm />
        </Modal>
        <Modal
          isOpen={isDeletedOpen}
          closeModal={() => dispatch(setDeleteModalOpen(false))}
          hasCloseButton={true}
        >
          <h1> Add ID of item you want to delete</h1>
          <DeleteDeviceInfoForm />
        </Modal>
      </div>
    )
  );
};

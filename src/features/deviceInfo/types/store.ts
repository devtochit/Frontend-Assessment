import type { Phones } from '@/features/homePage/types';

export type DeviceInfoState = {
  selectedDeviceInfo: Phones | null;
  openModal: boolean;
  editModalOpen: boolean;
  deleteModalOpen: boolean;
};

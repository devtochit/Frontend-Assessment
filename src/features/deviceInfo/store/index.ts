import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import type { DeviceInfoState } from '@/features/deviceInfo/types';
import type { Phones } from '@/features/homePage/types';
import type { RootState } from '@/store/store';

const initialState: DeviceInfoState = {
  selectedDeviceInfo: null,
  openModal: false,
  editModalOpen: false,
  deleteModalOpen: false,
};

export const deviceInfoSlice = createSlice({
  name: 'deviceInfo',
  initialState,
  reducers: {
    setSelectedDeviceInfo: (state, { payload: phone }: PayloadAction<Phones>) => {
      state.selectedDeviceInfo = phone;
    },
    setOpenModal: (state, { payload: isOpen }) => {
      state.openModal = isOpen;
    },
    setEditModalOpen: (state, { payload: isEditOpen }) => {
      state.editModalOpen = isEditOpen;
    },
    setDeleteModalOpen: (state, { payload: isDeleteOpen }) => {
      state.deleteModalOpen = isDeleteOpen;
    },
    resetSelectedDeviceInfo: (state) => {
      state.selectedDeviceInfo = null;
    },
  },
});

const { actions, reducer } = deviceInfoSlice;

export const {
  setSelectedDeviceInfo,
  resetSelectedDeviceInfo,
  setOpenModal,
  setDeleteModalOpen,
  setEditModalOpen,
} = actions;

export default reducer;

export const selectSelectedDeviceInfo = (state: RootState): Phones | null => {
  const { selectedDeviceInfo } = state.deviceInfo;
  return selectedDeviceInfo;
};
export const selectModalOpen = (state: RootState) => {
  const { openModal } = state.deviceInfo;
  return openModal;
};
export const selectEditModalOpen = (state: RootState) => {
  const { editModalOpen } = state.deviceInfo;
  return editModalOpen;
};
export const selectDeleteModalOpen = (state: RootState) => {
  const { deleteModalOpen } = state.deviceInfo;
  return deleteModalOpen;
};

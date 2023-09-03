import { StateCreator } from 'zustand';
import { KeluarModalSlice } from '../../../../../types';

const createKeluarModalSlice: StateCreator<KeluarModalSlice> = (set) => ({
  isKeluarModalClicked: false,
  setIsKeluarModalClicked: () =>
    set((state) => ({ isKeluarModalClicked: !state.isKeluarModalClicked })),
});

export default createKeluarModalSlice;

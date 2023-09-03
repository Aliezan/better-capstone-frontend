import { StateCreator } from 'zustand';
import SimpanModalSlice from './types';

const createSimpanModalSlice: StateCreator<SimpanModalSlice> = (set) => ({
  isSimpanModalClicked: false,
  setIsSimpanModalClicked: () =>
    set((state) => ({ isSimpanModalClicked: !state.isSimpanModalClicked })),
});

export default createSimpanModalSlice;

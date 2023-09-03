import { create } from 'zustand';
import { ChartSlice, UsersSlice, SidebarSlice } from './slices';
import { StateFromFunctions } from './types';

type Store = StateFromFunctions<
  [typeof ChartSlice, typeof UsersSlice, typeof SidebarSlice]
>;

const useStore = create<Store>()((...a) => ({
  ...ChartSlice(...a),
  ...UsersSlice(...a),
  ...SidebarSlice(...a),
}));

export default useStore;

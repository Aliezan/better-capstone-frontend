import { StateCreator } from 'zustand';
import { ChartSlice } from './types';

const createChartSlice: StateCreator<ChartSlice> = (set) => ({
  chartExpand: false,
  setChartExpand: () => set((state) => ({ chartExpand: !state.chartExpand })),
});

export default createChartSlice;

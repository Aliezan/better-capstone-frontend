'use client';

import React, { FC } from 'react';
import { Bar } from 'react-chartjs-2';
import { HomeViewModel } from '@/viewModel';

const Chart: FC = () => {
  const viewModel = HomeViewModel();

  return (
    <div
      className={`${
        viewModel.chartExpand ? 'h-[440px]' : 'h-[340px]'
      } cursor-pointer transition-all`}
      onClick={viewModel.setChartExpand}
      id='chart'
    >
      <Bar options={viewModel.options} data={viewModel.data} />
    </div>
  );
};
export default Chart;

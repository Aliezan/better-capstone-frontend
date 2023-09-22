'use client';

import React, { FC } from 'react';
import { HomeViewModel } from '@/viewModel';
import { CardStats } from '../../molecules';

const HomeStats: FC = () => {
  const viewModel = HomeViewModel();
  return (
    <div>
      <div className='w-full flex flex-col sm:flex-row gap-3 justify-between items-center'>
        <CardStats
          className='flex-1'
          statsNumber={viewModel.totalUsers}
          statsTitle='Jumlah Pengguna'
          page='/manage-user/total'
          hover
          id='home-total'
        />
        <CardStats
          className='flex-1'
          statsNumber={viewModel.onlineUsers}
          statsTitle='Pengguna Online'
          page='/manage-user/online'
          hover
          id='home-online'
        />
        <CardStats
          className='flex-1'
          statsNumber={viewModel.Threads?.length}
          statsTitle='Jumlah Thread'
          page='/thread/manage'
          hover
          id='home-thread'
        />
        <CardStats
          className='flex-1'
          statsNumber={viewModel.threadReport?.length}
          statsTitle='Thread Yang Dilaporkan'
          page='/thread/report'
          hover
          id='home-report'
        />
      </div>
    </div>
  );
};

export default HomeStats;

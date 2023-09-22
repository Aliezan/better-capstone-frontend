'use client';

import React, { FC } from 'react';
import Image from 'next/image';
import { NavbarViewModel } from '@/viewModel';

const KeluarButton: FC = () => {
  const viewModel = NavbarViewModel();

  return (
    <div>
      <div className='pr-16'>
        <button
          className='flex items-center gap-2 hover:outline p-2 rounded-2xl outline-1 outline-[#DA0000CC]'
          type='button'
          id='buttonKeluar'
          onClick={viewModel.handleSignOut}
        >
          <Image src='/logout.png' alt='logout' width={24} height={25} />
          <h3 className='text-xl font-bold text-[#DA0000CC] '>Keluar</h3>
        </button>
      </div>
    </div>
  );
};

export default KeluarButton;

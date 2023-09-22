'use client';

import React, { FC } from 'react';
import Image from 'next/image';
import { NavbarViewModel } from '@/viewModel';

const ProfileButtton: FC = () => {
  const viewModel = NavbarViewModel();
  return (
    <div className='flex items-center gap-2 '>
      <Image
        src={viewModel?.image ?? ''}
        alt='profile'
        width={45}
        height={45}
        className='rounded-full w-[45px]'
      />
      <h3 className='text-xl font-normal text-[#012269CC]'>
        Halo {viewModel?.name}
      </h3>
    </div>
  );
};

export default ProfileButtton;

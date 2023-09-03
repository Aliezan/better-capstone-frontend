'use client';

import React, { FC } from 'react';
import Image from 'next/image';
import AcceptVector from '../../../assets/accept.svg';

interface AcceptButtonProps {
  onClick: () => void;
}

const AcceptButton: FC<AcceptButtonProps> = ({ onClick }) => (
  <div className='w-[60px] h-[69px]'>
    <button type='button' className='btn' id='buttonterima' onClick={onClick}>
      <Image
        src={AcceptVector}
        alt='Accept Logo'
        id='AcceptLogo'
        className='ml-[24px] mt-[6px] mb-[8px]'
      />
      <p className='w-[52px] h-[34px] font-source-sans font-normal text-[12px] text-center ml-[9px]'>
        Setujui Laporan
      </p>
    </button>
  </div>
);

export default AcceptButton;

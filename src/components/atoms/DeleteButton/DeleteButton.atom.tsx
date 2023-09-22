'use client';

import React, { FC } from 'react';
import Image from 'next/image';

interface DeleteButtonProps {
  handleClick: () => void;
}

const DeleteButton: FC<DeleteButtonProps> = ({ handleClick }) => (
  <div className='w-[60px] h-[69px]'>
    <button
      id='buttonhapus'
      className='btn'
      type='button'
      onClick={handleClick}
    >
      <Image
        src='/Trash1.svg'
        alt='Trash Logo'
        id='TrashLogo'
        className='ml-[24px] mt-[6px] mb-[8px]'
      />
      <p className='w-[52px] h-[34px] font-source-sans font-normal text-[12px] text-center ml-[9px]'>
        {' '}
        Hapus Thread{' '}
      </p>
    </button>
  </div>
);

export default DeleteButton;

'use client';

import React, { FC } from 'react';
import Image from 'next/image';
import x from '../../../assets/x-cross.svg';

interface DeleteSearchHistoryButtonProps {
  handleDeleteSearchHistory: () => void;
}

const DeleteSearchHistoryButton: FC<DeleteSearchHistoryButtonProps> = ({
  handleDeleteSearchHistory,
}) => (
  <button
    type='button'
    className='mr-[16px]'
    onClick={handleDeleteSearchHistory}
  >
    <Image src={x} alt='delete history' />
  </button>
);

export default DeleteSearchHistoryButton;

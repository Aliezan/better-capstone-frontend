'use client';

import React, { FC } from 'react';
import Image from 'next/image';

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
    <Image src='/x-cross.svg' alt='delete history' />
  </button>
);

export default DeleteSearchHistoryButton;

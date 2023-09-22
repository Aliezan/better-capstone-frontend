'use client';

import React, { FC } from 'react';
import Image from 'next/image';

interface SearchButtonProps {
  handleSearch: () => void;
}

const SearchButton: FC<SearchButtonProps> = ({ handleSearch }) => (
  <button
    type='button'
    className='mt-[9px] mb-[9px] ml-[16px]'
    onClick={handleSearch}
  >
    <Image src='/search.svg' alt='search' />
  </button>
);
export default SearchButton;

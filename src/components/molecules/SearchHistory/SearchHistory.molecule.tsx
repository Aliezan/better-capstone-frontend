import React, { FC } from 'react';
import Image from 'next/image';

interface SearchHistoryProps {
  searchHistory: string;
  handleClick: () => void;
}

const SearchHistory: FC<SearchHistoryProps> = ({
  searchHistory,
  handleClick,
}) => (
  <div className='flex gap-[12px] mt-[9px] ml-[16px] mb-[9px]'>
    <Image src='/history.svg' alt='history' />
    <button type='button' onClick={handleClick}>
      <p className='font-normal pl-[10px]'>{searchHistory}</p>
    </button>
  </div>
);

export default SearchHistory;

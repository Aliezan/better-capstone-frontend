'use client';

import React, { FC } from 'react';
import useStore from '@/store/client/store';

interface HomeContentProps {
  children: React.ReactNode;
}

const HomeContent: FC<HomeContentProps> = ({ children }) => {
  const { isExpand } = useStore();

  return (
    <div
      className={`col-end-13 col-span-11 transition-all duration-200 ease-out  ${
        isExpand ? 'ml-24' : '-ml-10'
      }`}
    >
      {children}
    </div>
  );
};

export default HomeContent;

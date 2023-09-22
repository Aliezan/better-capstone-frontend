'use client';

import React, { FC } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface CardStatsProps {
  statsNumber: number | undefined;
  statsTitle: string;
  hover: boolean;
  page: string;
  id: string;
  className?: string;
}

const CardStats: FC<CardStatsProps> = ({
  statsNumber,
  statsTitle,
  hover,
  page,
  id,
  className,
}) => {
  const currentPath = usePathname();
  return (
    <div
      className={`w-[280px] flex justify-center items-center bg-[#FFFFFF] shadow-lg rounded-[10px] cursor-pointer ${className}`}
      id={id}
    >
      <div
        className={`w-[260px] p-6 transition-all duration-300 ${
          hover && 'hover:p-8'
        }`}
      >
        <Link
          href={page}
          className={
            currentPath === page
              ? 'font-source-sans font-normal text-[16px] text-center text-blue-500'
              : 'font-source-sans font-normal text-[16px] text-center'
          }
        >
          <p>{statsNumber}</p>
        </Link>
        <Link
          href={page}
          className={
            currentPath === page
              ? 'font-source-sans font-normal text-[16px] text-center text-blue-500'
              : 'font-source-sans font-normal text-[16px] text-center'
          }
        >
          <p>{statsTitle}</p>
        </Link>
      </div>
    </div>
  );
};

export default CardStats;

import React, { FC } from 'react';
import Image from 'next/image';

interface TooltipButtonProps {
  time: string;
}

const TooltipButton: FC<TooltipButtonProps> = ({ time }) => (
  <div className='group'>
    <Image
      src='/LightTooltip.svg'
      alt=''
      className='group-hover:hidden group-hover:transition'
    />
    <div className='hidden group-hover:block p-2 bg-[#DCDCDC33] rounded-md text-sm font-bold text-[#012269] transition-all'>
      <p>Terakhir Diperbaharui {time}</p>
    </div>
  </div>
);

export default TooltipButton;

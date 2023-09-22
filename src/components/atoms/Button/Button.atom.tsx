'use client';

import React, { FC } from 'react';
import Image from 'next/image';

interface ButtonProps {
  img: string;
  altImg: string;
  buttonDesc: string;
  handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  id: string;
}

interface ImageCondition {
  [key: string]: string;
}

const Button: FC<ButtonProps> = ({
  img,
  altImg,
  buttonDesc,
  handleClick,
  id,
}) => {
  const imgCondition: ImageCondition = {
    mute: '/mute.svg',
    block: '/block-user.svg',
    unmute: '/unmute.svg',
    unblock: '/unblock-user.svg',
    eye: '/Eye.svg',
    trash: '/Trash1.svg',
  };

  return (
    <div className='w-[60px] h-[69px]'>
      <button type='button' onClick={handleClick} id={id}>
        <Image
          src={imgCondition[img]}
          alt={altImg === 'mute' ? 'mute user' : 'block user'}
          className='ml-[24px] mt-[6px]'
        />
        <p className='w-[52px] h-[34px] font-source-sans font-normal text-[12px] text-center ml-[9px]'>
          {buttonDesc}
        </p>
      </button>
    </div>
  );
};

export default Button;

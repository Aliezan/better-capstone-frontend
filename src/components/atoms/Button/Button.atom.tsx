'use client';

import React, { FC } from 'react';
import Image from 'next/image';
import MuteUser from '../../../assets/mute.svg';
import BlockUser from '../../../assets/block-user.svg';
import UnmuteUser from '../../../assets/unmute.svg';
import UnblockUser from '../../../assets/unblock-user.svg';
import Eye from '../../../assets/Eye.svg';
import Trash from '../../../assets/Trash1.svg';

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
    mute: MuteUser,
    block: BlockUser,
    unmute: UnmuteUser,
    unblock: UnblockUser,
    eye: Eye,
    trash: Trash,
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

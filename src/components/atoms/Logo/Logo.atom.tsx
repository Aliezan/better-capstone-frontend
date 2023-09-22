import React, { FC } from 'react';
import Image from 'next/image';

interface LogoProps {
  textLogo?: 'black' | 'white';
}

const Logo: FC<LogoProps> = ({ textLogo }) => (
  <div className='flex items-center gap-[32px] pt-[1px] pl-[3px]' id='logo'>
    <Image src='/logo.png' alt='logo' className='w-14 z-1' width='100' height='100' />
    <h3
      className={`${
        textLogo === 'black' ? 'text-black' : 'text-white'
      } text-2xl font-bold pl-[1px]`}
    >
      Squad Space
    </h3>
  </div>
);

export default Logo;

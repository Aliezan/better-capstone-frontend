import React, { FC } from 'react';
import Image from 'next/image';
import logo from '../../../assets/logo.png';

interface LogoProps {
  textLogo: 'black' | 'white';
}

const Logo: FC<LogoProps> = ({ textLogo }) => (
  <div className='flex items-center gap-[32px] pt-[1px] pl-[3px]' id='logo'>
    <Image src={logo} alt='' className='w-14' />
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

import React, { FC } from 'react';
import Image from 'next/image';
import ProfileButtton from '../../atoms/ProfileButton/ProfileButtton.atom';
import { KeluarButton } from '../../atoms';

const NavHome: FC = () => (
  <div className='flex items-center gap-[25px] pt-[2px] ' id='navbarHome'>
    <ProfileButtton />
    <Image src='/line.png' width={24} height={24} alt='' className='h-6' />

    <KeluarButton />
  </div>
);

export default NavHome;

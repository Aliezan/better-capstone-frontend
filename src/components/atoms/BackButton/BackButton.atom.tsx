import React, { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const BackButton: FC = () => (
  <Link href='/'>
    <button className='flex items-center' type='button' id='buttonBack'>
      <Image src='/back.svg' alt='back' className='mr-[14.5px] ml-[153px] ' />
      <h3 className='text-xl font-semibold' id='ubahProfilText'>
        Ubah Profil
      </h3>
    </button>
  </Link>
);

export default BackButton;

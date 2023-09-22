import React, { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const ReturnButton: FC = () => (
  <div>
    <Link href='/thread/manage' id='linkkembali'>
      <button
        id='buttonkembali'
        className='btn flex h-[48px] p-2 gap-[10px]'
        type='button'
      >
        <Image
          src='/Return.svg'
          alt='Return Logo'
          id='ReturnLogo'
          className='ml-[10px] mt-[12px]'
        />
        <p className='not-italic font-semibold text-blue-700 ml-[14px] mt-[5px]'>
          Kembali Ke Manage Thread{' '}
        </p>
      </button>
    </Link>
  </div>
);

export default ReturnButton;

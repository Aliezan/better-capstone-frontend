import { LoginButton, Logo } from '@/components/atoms';
import React, { FC } from 'react';

const Login: FC = () => (
  <section>
    <div className='flex py-[17px] px-[80px] justify-between items-center'>
      <Logo textLogo='black' />
    </div>
    <div className='pt-14'>
      <div className='text-center'>
        <h1 className='text-5xl font-semibold  text-[#2C2C2C]'>
          Selamat Datang Di Squad Space Centre
        </h1>
        <h3 className='text-xl font-normal  text-[#2C2C2C] pt-2'>
          Silahkan Login Untuk Mengatur Konten
        </h3>
      </div>
    </div>
    <div className='grid pt-[72px] place-content-center'>
      <LoginButton />
    </div>
  </section>
);

export default Login;

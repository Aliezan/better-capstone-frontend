import React, { FC } from 'react';
// import Image from 'next/image';
import { Logo, ButtonMasuk } from '@/components/atoms';
import { Footer, Hero } from '@/components/molecules';
import Link from 'next/link';

const Landing: FC = () => (
  <section>
    <div className='min-h-screen bg-center bg-cover'>
      {/* <Image alt='hero' src='/hero.jpg' layout='fill' objectFit='cover' /> */}
      <div className='flex py-[17px] px-[80px] justify-between items-center'>
        <Logo textLogo='black' />
        <Link href='/login'>
          <ButtonMasuk type='button' textButton='masuk' />
        </Link>
      </div>
      <Hero />
      <Footer textColor='black' />
    </div>
  </section>
);

export default Landing;

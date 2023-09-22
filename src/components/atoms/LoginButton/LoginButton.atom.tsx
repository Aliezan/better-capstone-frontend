'use client';

import React, { FC } from 'react';
import { signIn } from 'next-auth/react';

const LoginButton: FC = () => (
  <button
    className='bg-[#195FAA] py-[8px] px-[32px] text-white rounded-2xl text-base font-black'
    type='button'
    onClick={() => signIn()}
  >
    Login dengan GitHub
  </button>
);

export default LoginButton;

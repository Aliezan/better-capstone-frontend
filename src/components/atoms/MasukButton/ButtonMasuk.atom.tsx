import React, { FC } from 'react';

interface ButtonMasukProps {
  textButton: 'simpan' | 'masuk';
  type: 'button' | 'submit';
  id?: string;
}

const ButtonMasuk: FC<ButtonMasukProps> = ({ textButton, type, id }) => (
  <button
    className='bg-[#195FAA] py-[8px] px-[32px] text-white rounded-2xl text-base font-black'
    type={type === 'button' ? 'button' : 'submit'}
    id={id}
  >
    {`${textButton === 'simpan' ? 'Simpan' : 'Masuk'}`}
  </button>
);

export default ButtonMasuk;

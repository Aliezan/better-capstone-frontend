import React, { FC } from 'react';
import Image from 'next/image';
import logout from '../../../assets/logout.png';

interface KeluarButtonProps {
  onClick: () => void;
}

const KeluarButton: FC<KeluarButtonProps> = ({ onClick }) => (
  <div>
    <div className='pr-16'>
      <button
        className='flex items-center gap-2 hover:outline p-2 rounded-2xl outline-1 outline-[#DA0000CC] '
        type='button'
        id='buttonKeluar'
        onClick={onClick}
      >
        <Image src={logout} alt='' />
        <h3 className='text-xl font-bold text-[#DA0000CC] '>Keluar</h3>
      </button>
    </div>
  </div>
);

export default KeluarButton;

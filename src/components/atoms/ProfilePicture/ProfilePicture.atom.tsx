import React, { FC } from 'react';
import Image from 'next/image';
import aman from '../../../assets/aman.svg';
import notAman from '../../../assets/notAman.svg';

interface ProfilePictureProps {
  isUserBlocked: boolean;
  isUserMuted: boolean;
  img: string;
}

const ProfilePicture: FC<ProfilePictureProps> = ({
  isUserBlocked,
  isUserMuted,
  img,
}) => (
  <div className='w-[60px] h-[50px] mt-[8.5px] mr-[11.57px] relative'>
    <Image
      src={img}
      alt='profile'
      className='h-[49px] w-[50px] rounded-[100px]'
    />
    <Image
      src={isUserBlocked || isUserMuted ? notAman : aman}
      alt='aman'
      className='absolute bottom-0 -right-1'
    />
  </div>
);

export default ProfilePicture;

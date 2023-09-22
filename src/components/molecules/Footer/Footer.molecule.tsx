import React, { FC } from 'react';

interface FooterProps {
  textColor: string;
}

const Footer: FC<FooterProps> = ({ textColor }) => (
  <div id='footer'>
    <div
      className={`${
        textColor === 'black' ? 'text-black' : 'text-white'
      } text-base font-normal text-center py-[25px] pb-[80px]`}
    >
      © 2023 Squad Space
    </div>
  </div>
);

export default Footer;

import React, { FC } from 'react';
import Logo from '../../atoms/Logo/Logo.atom';
import { NavHome } from '../../molecules';

interface NavbarProps {
  bgNavbar?: 'bgIsLoggedIn';
}

const Navbar: FC<NavbarProps> = ({ bgNavbar }) => (
  <div>
    <div
      className={`${
        bgNavbar === 'bgIsLoggedIn' ? 'bg-[#F8F8F8]' : 'bg-transparent'
      } flex w-full py-[17px] pl-[80px] pr-[20px] justify-between items-center fixed z-10`}
      id='navbar'
    >
      <Logo textLogo='black' />
      <NavHome />
    </div>
    <div
      className={`pt-[90px] ${
        bgNavbar === 'bgIsLoggedIn' ? 'bg-[#F8F8F8]' : 'bg-transparent'
      }`}
    />
  </div>
);

export default Navbar;

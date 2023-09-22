'use client';

import React, { FC } from 'react';
import { usePathname } from 'next/navigation';
import { Navbar, Sidebar } from '@/components/organisms';
import { SidebarViewModel } from '@/viewModel';

interface PathCheckerProps {
  children: React.ReactNode;
}

const PathChecker: FC<PathCheckerProps> = ({ children }) => {
  const excludedPath = ['/login', '/landing', '/ubahprofil'];
  const isExcluded = excludedPath.includes(usePathname());

  const viewModel = SidebarViewModel();

  return (
    <>
      {!isExcluded ? (
        <>
          <Navbar bgNavbar='bgIsLoggedIn' />
          <Sidebar
            expand={viewModel.isExpand}
            handleExpand={viewModel.setIsExpand}
          />
          {children}
        </>
      ) : (
        children
      )}
    </>
  );
};

export default PathChecker;

import React, { FC } from 'react';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ReactQueryProvider } from '@/utils/ReactQueryProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Squad Space - NextJS w/ TypeScript',
  description: 'Capstone Project - Squad Space NextJS w/ TypeScript Migration',
};

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout: FC<RootLayoutProps> = ({ children }) => (
  <html lang='en'>
    <body className={inter.className}>
      <ReactQueryProvider>{children}</ReactQueryProvider>
    </body>
  </html>
);

export default RootLayout;

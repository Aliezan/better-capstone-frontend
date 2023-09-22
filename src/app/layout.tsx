import React, { FC } from 'react';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ReactQueryProvider } from '@/utils/ReactQueryProvider';
import SessionProvider from '@/utils/SessionProvider';
import { getServerSession } from 'next-auth';
import Login from '@/app/login/page';
import PathChecker from '@/utils/PathChecker';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Squad Space - NextJS w/ TypeScript',
  description: 'Capstone Project - Squad Space NextJS w/ TypeScript Migration',
};

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout: FC<RootLayoutProps> = async ({ children }) => {
  const session = await getServerSession();

  return (
    <html lang='id'>
      <head>
        <link rel='icon' href='/logo.png' />
      </head>
      <body className={inter.className}>
        <SessionProvider session={session}>
          {!session || !session.user ? (
            <Login />
          ) : (
            <ReactQueryProvider>
              <PathChecker>{children}</PathChecker>
            </ReactQueryProvider>
          )}
        </SessionProvider>
      </body>
    </html>
  );
};

export default RootLayout;

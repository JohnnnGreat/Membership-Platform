import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Top/Header.js';
import SideNav from '@/components/Side';
import MainSection from '@/components/Main';
import { usePathname } from 'next/navigation';

const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const path = usePathname();

  // const isAuth = path.startsWith('/auth');
  // const isPackage = path.startsWith('/package');
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

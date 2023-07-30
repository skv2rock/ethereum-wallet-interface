'use client';

import './globals.css';
import { Inter } from 'next/font/google';
import { WagmiConfig as config } from './shared/config';
import { WagmiConfig } from 'wagmi';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <WagmiConfig config={config}>{children}</WagmiConfig>
      </body>
    </html>
  );
}

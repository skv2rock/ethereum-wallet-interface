'use client';

import { useAccount } from 'wagmi';
import { Connect, WalletInfo } from './components';

export default function Account() {
  const { isConnected } = useAccount();

  return (
    <div className='flex min-h-screen flex-col items-center justify-center p-24'>
      <h1 className='text-6xl mb-12'>Account details</h1>
      {isConnected ? <WalletInfo /> : <Connect />}
    </div>
  );
}

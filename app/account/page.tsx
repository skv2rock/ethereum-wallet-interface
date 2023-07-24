'use client';

import { useAccount, useConnect } from 'wagmi';
import { Connect, TokenList } from './components';

export default function Account() {
  const { address, isConnected } = useAccount();

  return (
    <div className='flex min-h-screen flex-col items-center justify-center p-24'>
      {isConnected ? <>address: {address}</> : <Connect />}
    </div>
  );
}

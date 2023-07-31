'use client';

import { useAccount } from 'wagmi';
import dynamic from 'next/dynamic';

const WalletDetails = dynamic(() => import('./components/WalletDetails'), {
  ssr: false
});

const ConnectWallet = dynamic(() => import('./components/ConnectWallet'), {
  ssr: false
});

export default function Account() {
  const { isConnected } = useAccount();

  return (
    <div className='flex min-h-screen flex-col items-center justify-center p-24'>
      <h1 className='text-6xl mb-12'>Account details</h1>
      {isConnected ? <WalletDetails /> : <ConnectWallet />}
    </div>
  );
}

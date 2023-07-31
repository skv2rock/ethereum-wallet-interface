'use client';

import { useEffect } from 'react';
import { useAccount, useConnect } from 'wagmi';
import { InjectedConnector } from 'wagmi/connectors/injected';

export default function ConnectWallet() {
  const { isConnected } = useAccount();
  const { connect, isLoading } = useConnect({
    connector: new InjectedConnector()
  });

  const connectMetamask = () => connect();

  useEffect(() => {
    const state = localStorage.getItem('walletConnectState') || '';

    if (!isConnected && state === 'true') connect();
  }, [isConnected, connect]);

  useEffect(() => {
    localStorage.setItem('walletConnectState', isConnected.toString());
  }, [isConnected]);

  return (
    <div className='relative flex place-items-center flex-col max-w-4xl text-center w-full bg-fuchsia-300/10 p-10 rounded-lg'>
      <h2 className='text-4xl mb-10'>Please connect wallet</h2>
      <button className='btn btn-secondary btn-lg max-w-sm w-full' onClick={connectMetamask}>
        connect {isLoading && <span className='loading loading-spinner loading-md'></span>}
      </button>
    </div>
  );
}

'use client';

import { useConnect } from 'wagmi';
import { InjectedConnector } from 'wagmi/connectors/injected';

export function ConnectWallet() {
  const { connect, isLoading } = useConnect({
    connector: new InjectedConnector()
  });

  const connectMetamask = () => connect();

  return (
    <div className='relative flex place-items-center flex-col max-w-4xl text-center w-full bg-fuchsia-300/10 p-10 rounded-lg'>
      <h2 className='text-4xl mb-10'>Please connect wallet</h2>
      <button className='btn btn-secondary btn-lg max-w-sm w-full' onClick={connectMetamask}>
        connect {isLoading && <span className='loading loading-spinner loading-md'></span>}
      </button>
    </div>
  );
}

import { EthereumApi } from '@/app/apis/ethereum.api';
import {
  ARBITRUM_CRV,
  ARBITRUM_USDC,
  ARBITRUM_USDT,
  ETHEREUM_CRV,
  ETHEREUM_USDC,
  ETHEREUM_USDT,
  POLYGON_CRV,
  POLYGON_USDC,
  POLYGON_USDT
} from '@/app/shared/constants';
import { TokenList } from './TokenList';
import { useAccount } from 'wagmi';
import { arbitrum, polygon, mainnet } from 'wagmi/chains';
import { useTokensHook } from '../hooks/useTokensHook';

export function WalletDetails() {
  const { address } = useAccount();
  const ethBalances = useTokensHook([ETHEREUM_USDT, ETHEREUM_USDC, ETHEREUM_CRV], EthereumApi.getTokenBalance);
  const polygonBalances = useTokensHook([POLYGON_USDT, POLYGON_USDC, POLYGON_CRV], EthereumApi.getTokenBalance);
  const arbitrumBalances = useTokensHook([ARBITRUM_USDT, ARBITRUM_USDC, ARBITRUM_CRV], EthereumApi.getTokenBalance);

  return (
    <div className='w-full '>
      <h1 className='text-center text-2xl p-5 rounded-lg bg-fuchsia-300/10 mb-5'>
        Wallet address: <span className='text-secondary ml-2'>{address}</span>
      </h1>
      <TokenList network={mainnet.name} balances={ethBalances} />
      <TokenList network={polygon.name} balances={polygonBalances} />
      <TokenList network={arbitrum.name} balances={arbitrumBalances} />
    </div>
  );
}

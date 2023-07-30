'use client';

import { ArbitrumApi, EthereumApi, PolygonApi } from '@/app/apis';
import { NetworksNames } from '@/app/shared/enums/network.enums';
import { NetworkBalancesData, Token, TokenPromiseResult } from '@/app/shared/types';
import { useEffect, useState } from 'react';
import { useAccount } from 'wagmi';

function getApiByName(name: NetworksNames) {
  switch (name) {
    case NetworksNames.Ethereum:
      return EthereumApi;
    case NetworksNames.Polygon:
      return PolygonApi;
    case NetworksNames.Arbitrum:
      return ArbitrumApi;
  }
}

export function useTokensHook(network: NetworksNames, tokens: Token[]) {
  const { address } = useAccount();
  const [balances, setBalances] = useState<NetworkBalancesData>({
    network: network,
    data: []
  });

  useEffect(() => {
    const NetworkApi = getApiByName(network);

    const promises: Promise<TokenPromiseResult>[] = tokens.map((token: Token) =>
      NetworkApi.getTokenBalance(address!, token)
    );

    Promise.all(promises).then((balances: TokenPromiseResult[]) => {
      setBalances((state) => ({
        ...state,
        data: balances
      }));
    });
  }, [address, network, tokens]);

  return balances;
}

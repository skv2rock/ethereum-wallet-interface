import { Token, TokenPromiseResult } from '@/app/shared/types';
import { useEffect, useState } from 'react';
import { useAccount } from 'wagmi';

export function useTokensHook(
  tokens: Token[],
  getBalance: (walletAddress: string, token: Token) => Promise<TokenPromiseResult>
) {
  const { address } = useAccount();
  const [balances, setBalances] = useState<TokenPromiseResult[]>();

  useEffect(() => {
    const promises: Promise<TokenPromiseResult>[] = tokens.map((token: Token) => getBalance(address as string, token));

    Promise.all(promises).then((balances: TokenPromiseResult[]) => {
      setBalances(balances);
    });
  }, [address]);

  return balances;
}

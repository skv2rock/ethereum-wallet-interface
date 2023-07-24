import { ethers, formatUnits } from 'ethers';
import { erc20ABI } from 'wagmi';
import { arbitrum } from 'wagmi/chains';
import { Token, TokenPromiseResult } from '../shared/types';

export class ArbitrumApi {
  public static getTokenBalance(walletAddress: string, token: Token): Promise<TokenPromiseResult> {
    const provider = new ethers.JsonRpcProvider(arbitrum.rpcUrls.default.http[0]);

    const contract = new ethers.Contract(token.contract, erc20ABI, provider);

    return contract
      .balanceOf(walletAddress)
      .then((balance: string) => ({ name: token.name, balance: Number(formatUnits(balance, token.decimals)) }))
      .catch(() => ({ name: token.name, balance: 0 }));
  }
}

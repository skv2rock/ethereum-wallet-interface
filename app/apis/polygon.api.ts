import { ethers, formatUnits } from 'ethers';
import { erc20ABI } from 'wagmi';
import { polygon } from 'wagmi/chains';
import { Token, TokenPromiseResult } from '../shared/types';

export class PolygonApi {
  public static async getTokenBalance(walletAddress: string, token: Token): Promise<TokenPromiseResult> {
    const provider = new ethers.JsonRpcProvider(polygon.rpcUrls.default.http[0]);

    const contract = new ethers.Contract(token.contract, erc20ABI, provider);

    return contract
      .balanceOf(walletAddress)
      .then((balance: string) => ({ name: token.name, balance: Number(formatUnits(balance, token.decimals)) }))
      .catch(() => ({ name: token.name, balance: 0 }));
  }
}

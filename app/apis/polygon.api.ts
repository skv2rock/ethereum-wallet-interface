import { ethers, formatUnits } from 'ethers';
import { erc20ABI } from 'wagmi';
import { polygon } from 'wagmi/chains';
import { Token } from '../shared/types';

export class PolygonApi {
  public static async getTokenBalance(walletAddress: string, token: Token): Promise<number> {
    const provider = new ethers.JsonRpcProvider(polygon.rpcUrls.default.http[0]);

    const contract = new ethers.Contract(token.contract, erc20ABI, provider);

    const balance: string = await contract.balanceOf(walletAddress);

    return Number(formatUnits(balance, token.decimals));
  }
}

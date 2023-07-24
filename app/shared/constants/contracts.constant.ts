import { TokenNames } from '@/app/enums';
import { Token } from '../types';

export const ETHEREUM_USDT: Token = {
  name: TokenNames.USDT,
  contract: '0xdac17f958d2ee523a2206206994597c13d831ec7',
  decimals: 6
};
export const ETHEREUM_USDC: Token = {
  name: TokenNames.USDC,
  contract: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
  decimals: 6
};
export const ETHEREUM_CRV: Token = {
  name: TokenNames.CRV,
  contract: '0xd533a949740bb3306d119cc777fa900ba034cd52',
  decimals: 18
};

export const ARBITRUM_USDT: Token = {
  name: TokenNames.USDT,
  contract: '0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9',
  decimals: 6
};
export const ARBITRUM_USDC: Token = {
  name: TokenNames.USDC,
  contract: '0xaf88d065e77c8cc2239327c5edb3a432268e5831',
  decimals: 6
};
export const ARBITRUM_CRV: Token = {
  name: TokenNames.CRV,
  contract: '0x11cdb42b0eb46d95f990bedd4695a6e3fa034978',
  decimals: 18
};

export const POLYGON_USDT: Token = {
  name: TokenNames.USDT,
  contract: '0xc2132D05D31c914a87C6611C10748AEb04B58e8F',
  decimals: 6
};
export const POLYGON_USDC: Token = {
  name: TokenNames.USDC,
  contract: '0x2791bca1f2de4661ed88a30c99a7a9449aa84174',
  decimals: 6
};
export const POLYGON_CRV: Token = {
  name: TokenNames.CRV,
  contract: '0x172370d5cd63279efa6d502dab29171933a610af',
  decimals: 18
};

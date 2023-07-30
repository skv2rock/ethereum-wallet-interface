import { TokenNames } from '@/app/shared/enums';

export type Token = {
  name: TokenNames;
  contract: `0x${string}`;
  decimals: number;
};

export type TokenPromiseResult = {
  name: TokenNames;
  balance: number;
};

import { TokenNames } from '@/app/enums';

export type Token = {
  name: string;
  contract: string;
  decimals: number;
};

export type TokenPromiseResult = {
  name: string;
  balance: number;
};

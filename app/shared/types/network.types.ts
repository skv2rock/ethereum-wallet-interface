import { TokenPromiseResult } from '.';
import { NetworksNames } from '../enums/network.enums';

export type NetworkBalancesData = {
  network: NetworksNames;
  data: TokenPromiseResult[];
};

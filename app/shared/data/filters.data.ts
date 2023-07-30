import { AccountFiltersNames } from '../enums/filters.enums';
import { NETWORKS_NAMES, TOKEN_NAMES } from '../constants';
import { AccountFilter } from '../types';

export const accountFilters: AccountFilter[] = [
  { name: AccountFiltersNames.Network, options: NETWORKS_NAMES, selected: null },
  { name: AccountFiltersNames.Collateral, options: TOKEN_NAMES, selected: null }
];

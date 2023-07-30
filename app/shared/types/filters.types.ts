import { Nullable } from '.';
import { TokenNames } from '../enums';
import { AccountFiltersNames } from '../enums/filters.enums';
import { NetworksNames } from '../enums/network.enums';

export type FiltersOptions = TokenNames | NetworksNames;

export interface AccountFilter {
  name: AccountFiltersNames;
  options: FiltersOptions[];
  selected: Nullable<FiltersOptions>;
}

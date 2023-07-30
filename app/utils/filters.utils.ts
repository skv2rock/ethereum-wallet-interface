import { AccountFiltersNames } from '../shared/enums/filters.enums';
import { AccountFilter, FiltersOptions, NetworkBalancesData, Nullable, TokenPromiseResult } from '../shared/types';

export class FiltersUtils {
  public static getfilteredData(filter: AccountFilter, networkData: NetworkBalancesData[]): NetworkBalancesData[] {
    if (filter.selected === null) return networkData;

    switch (filter.name) {
      case AccountFiltersNames.Network:
        return FiltersUtils.getfilteredDataByNetwork(filter.selected, networkData);
      case AccountFiltersNames.Collateral:
        return FiltersUtils.getfilteredDataByCollateral(filter.selected, networkData);
      default:
        return networkData;
    }
  }

  public static getUpdatedFilters(
    filters: AccountFilter[],
    filterName: string,
    option: FiltersOptions
  ): AccountFilter[] {
    const currentFilter: AccountFilter = filters.find((filter: AccountFilter) => filter.name === filterName)!;

    currentFilter.selected = currentFilter.options.includes(option) ? option : null;

    return filters;
  }

  private static getfilteredDataByNetwork(selected: Nullable<FiltersOptions>, networkData: NetworkBalancesData[]) {
    return networkData.filter((data: NetworkBalancesData) => selected === data.network);
  }

  private static getfilteredDataByCollateral(selected: Nullable<FiltersOptions>, networkData: NetworkBalancesData[]) {
    networkData.forEach((networkBalanceData: NetworkBalancesData) => {
      networkBalanceData.data = networkBalanceData.data.filter((token: TokenPromiseResult) => selected === token.name);
    });

    return networkData;
  }
}

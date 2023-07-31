'use client';

import { ARBITRUM_TOKENS, ETHEREUM_TOKENS, POLYGON_TOKENS } from '@/app/shared/constants';
import { useAccount } from 'wagmi';
import { Select, TokenList } from '.';
import { AccountFilter, FiltersOptions, NetworkBalancesData } from '@/app/shared/types';
import { useTokensHook } from '../hooks/useTokensHook';
import { useEffect, useState } from 'react';
import { NetworksNames } from '@/app/shared/enums/network.enums';
import { FiltersUtils } from '@/app/utils';
import { accountFilters } from '@/app/shared/data';

export default function WalletDetails() {
  const { address } = useAccount();

  const ethereumBalances = useTokensHook(NetworksNames.Ethereum, ETHEREUM_TOKENS);
  const polygonBalances = useTokensHook(NetworksNames.Polygon, POLYGON_TOKENS);
  const arbitrumBalances = useTokensHook(NetworksNames.Arbitrum, ARBITRUM_TOKENS);

  const [currentFilters, setCurrentFilters] = useState<AccountFilter[]>(accountFilters);
  const [filteredBalances, setFilteredBalances] = useState<NetworkBalancesData[]>([]);

  useEffect(() => {
    setFilteredBalances([ethereumBalances, polygonBalances, arbitrumBalances]);
  }, [ethereumBalances, polygonBalances, arbitrumBalances]);

  const handleFilterChange = (filterName: string, option: FiltersOptions): void => {
    let clonedNetworksData = [{ ...ethereumBalances }, { ...polygonBalances }, { ...arbitrumBalances }];

    setCurrentFilters(FiltersUtils.getUpdatedFilters(currentFilters, filterName, option));

    accountFilters.forEach((filter: AccountFilter) => {
      clonedNetworksData = FiltersUtils.getfilteredData(filter, clonedNetworksData);
    });

    setFilteredBalances(clonedNetworksData);
  };

  return (
    <div className='w-full '>
      <h2 className='text-center text-2xl p-5 rounded-lg bg-fuchsia-300/10 mb-5'>
        Wallet address: <span className='text-secondary ml-2'>{address}</span>
      </h2>
      <div className='flex justify-end my-5'>
        {currentFilters.map((filter: AccountFilter) => (
          <Select
            filterName={filter.name}
            key={filter.name}
            onFilterChange={handleFilterChange}
            options={filter.options}
            placeholder={`All ${filter.name}`}
          />
        ))}
      </div>

      {filteredBalances.map((networkBalancesData: NetworkBalancesData) => (
        <TokenList key={networkBalancesData.network} networkBalancesData={networkBalancesData} />
      ))}
    </div>
  );
}

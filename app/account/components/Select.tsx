'use client';

import { AccountFiltersNames } from '@/app/shared/enums/filters.enums';
import { FiltersOptions } from '@/app/shared/types';
import React from 'react';

interface SelectProps {
  onFilterChange: (filterName: string, option: FiltersOptions) => void;
  filterName: AccountFiltersNames;
  placeholder?: string;
  options: FiltersOptions[];
}

export function Select({ options, filterName, onFilterChange, placeholder }: SelectProps) {
  return (
    <div className='form-control w-full max-w-xs'>
      <select
        className='select select-bordered mx-2'
        onChange={(event) => onFilterChange(filterName, event.target.value as FiltersOptions)}
      >
        {placeholder && <option>{placeholder}</option>}
        {options.map((option: FiltersOptions) => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </div>
  );
}

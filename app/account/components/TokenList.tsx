import { IconsUtils, TokenUtils } from '@/app/utils';
import Image from 'next/image';

export function TokenList({ network, balances }: { network: string; balances?: number[] }) {
  return (
    <div>
      <h2 className='text-center text-2xl'>{network} network</h2>
      <ul className='sm:px-8 sm:pt-6 sm:pb-8 lg:p-4 xl:px-8 xl:pt-6 xl:pb-8 grid grid-cols-3 gap-4'>
        {balances?.map((balance: number, index: number) => {
          const iconName: string = TokenUtils.getTokenNameById(index);

          return (
            <li key={index} className='bg-fuchsia-300/10 max-w-lg p-4 text-stone-50 text-2xl text-center'>
              <div>{TokenUtils.getTokenNameById(index)}</div>
              <p className='group w-full flex flex-row items-center justify-center rounded-md font-medium p-3'>
                balance:
                <span className='ml-5 text-secondary'>{parseFloat(balance.toFixed(2))}</span>
                <Image
                  className='ml-3'
                  src={IconsUtils.getIconUrlByName(iconName)}
                  width={30}
                  height={30}
                  alt='token icon'
                />
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

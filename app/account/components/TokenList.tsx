import { TokenPromiseResult } from '@/app/shared/types';
import { IconsUtils } from '@/app/utils';
import Image from 'next/image';

export function TokenList({ network, balances }: { network: string; balances?: TokenPromiseResult[] }) {
  return (
    <div>
      <h2 className='text-center text-2xl'>{network} network</h2>
      {balances ? (
        <ul className='sm:px-8 sm:pt-6 sm:pb-8 lg:p-4 xl:px-8 xl:pt-6 xl:pb-8 grid grid-cols-3 gap-4'>
          {balances?.map((token: TokenPromiseResult, index: number) => (
            <li key={index} className='bg-fuchsia-300/10 max-w-lg p-4 text-stone-50 text-2xl text-center'>
              <div>{token.name}</div>

              <p className='group w-full flex flex-row items-center justify-center rounded-md font-medium p-3'>
                balance:
                <span className='ml-5 text-secondary'>{parseFloat(token.balance.toFixed(2))}</span>
                <Image
                  className='ml-3'
                  src={IconsUtils.getIconUrlByName(token.name)}
                  width={30}
                  height={30}
                  alt='token icon'
                />
              </p>
            </li>
          ))}
        </ul>
      ) : (
        <span className='loading loading-spinner loading-lg m-auto block my-10'></span>
      )}
    </div>
  );
}

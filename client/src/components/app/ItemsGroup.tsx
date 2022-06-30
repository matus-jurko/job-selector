import { PropsWithChildren } from 'react';

type ItemsGroupProps = PropsWithChildren<{
  isEmpty: boolean;
  itemName: string;
}>;

const ItemsGroup = ({ children, isEmpty, itemName }: ItemsGroupProps) => {
  return isEmpty ? (
    <div className="flex items-center justify-center h-64 my-5">
      <span className="text-center text-slate-300">
        Vami pridané {itemName} sa zobrazia tu
      </span>
    </div>
  ) : (
    <div className="min-h-[16rem] lg:min-h-max lg:h-64 flex items-center overflow-y-auto my-5">
      <div className="flex flex-wrap justify-center w-full gap-4 mx-auto my-auto lg:w-3/4">
        {children}
      </div>
    </div>
  );
};

export default ItemsGroup;

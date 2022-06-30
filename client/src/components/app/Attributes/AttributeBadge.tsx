import { AppContext } from '../../../context/app/appContext';
import { XIcon } from '@heroicons/react/solid';
import { Attribute } from '../../../types';

import useContext from '../../../hooks/useContext';
import Button from '../../layout/Button';

const AttributeBadge = ({ id, importance, text }: Attribute) => {
  const { removeAttribute } = useContext(AppContext);

  return (
    <div className="flex w-full overflow-hidden rounded-md shadow-md lg:w-auto bg-slate-700">
      <span className="px-2 py-1 text-sm font-semibold text-white shadow-md bg-slate-500">
        {importance.toFixed(1)}
      </span>
      <span className="py-1 pl-2 pr-1 text-sm font-medium text-white truncate shrink">
        {text}
      </span>
      <Button
        className="px-1 ml-auto shrink-0 text-slate-400 hover:text-slate-200"
        onClick={() => removeAttribute(id)}
      >
        <span className="sr-only">Odstrániť parameter</span>
        <XIcon className="w-4 h-4 " aria-hidden={true} />
      </Button>
    </div>
  );
};

export default AttributeBadge;

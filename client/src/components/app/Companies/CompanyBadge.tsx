import { AppContext } from '../../../context/app/appContext';
import { XIcon } from '@heroicons/react/solid';
import { Company } from '../../../types';

import useContext from '../../../hooks/useContext';
import Button from '../../layout/Button';

const CompanyBadge = ({ id, name }: Company) => {
  const { removeCompany } = useContext(AppContext);

  return (
    <div className="flex w-full overflow-hidden rounded-md shadow-md lg:w-auto bg-slate-700">
      <span className="py-1 pl-2 pr-1 text-sm font-medium text-white truncate shrink">
        {name}
      </span>
      <Button
        className="px-1 ml-auto shrink-0 text-slate-400 hover:text-slate-200"
        onClick={() => removeCompany(id)}
      >
        <span className="sr-only">Odstrániť firmu</span>
        <XIcon className="w-4 h-4 " aria-hidden={true} />
      </Button>
    </div>
  );
};

export default CompanyBadge;

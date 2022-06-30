import { Company, Matrix as MatrixType } from '../../types';
import { AppContext } from '../../context/app/appContext';

import useContext from '../../hooks/useContext';
import Toggle from '../layout/Toggle';
import classNames from 'classnames';

interface MatrixProps {
  matrix?: MatrixType;
}

const Matrix = ({ matrix }: MatrixProps) => {
  const { setRelation, removeRelation, ...appContext } =
    useContext(AppContext);

  const attributes = !!matrix
    ? matrix.data.attributes
    : appContext.attributes;

  const companies = !!matrix
    ? matrix.data.companies
    : appContext.companies;

  const relations = !!matrix
    ? matrix.data.relations
    : appContext.relations;

  const maxImportance = attributes.reduce((prev, { importance }) => {
    return prev + importance; // Sum of all attribute importances...
  }, 0);

  const handleChange = (
    checked: boolean,
    attributeId: string,
    companyId: string
  ) => {
    return checked
      ? setRelation({ attribute: attributeId, company: companyId })
      : removeRelation(attributeId, companyId);
  };

  const isChecked = (attributeId: string, companyId: string) => {
    return relations.some(
      ({ attribute, company }) =>
        attribute === attributeId && company === companyId
    );
  };

  const calculateCompanyFit = ({ id }: Company) => {
    const attributeIds = relations
      .filter(({ company }) => company === id)
      .map(({ attribute }) => attribute);

    const importance = attributes.reduce((prev, { id, importance }) => {
      return attributeIds.includes(id) ? prev + importance : prev;
    }, 0);

    return (importance / maxImportance) * 100;
  };

  const companyNames = companies.map(({ name }) => name);
  const companyFits = companies.map(calculateCompanyFit);
  const bestFit = Math.max(...companyFits);

  return (
    <div className="relative overflow-x-auto rounded-lg shadow-lg">
      <table className="w-full text-sm text-left text-slate-300">
        <thead className="text-xs font-medium uppercase bg-slate-700 text-slate-400">
          <tr>
            {['Parameter', 'Koeficient', ...companyNames].map((header) => (
              <th className="px-6 py-4" scope="col" key={header}>
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="text-white bg-slate-800">
          {attributes.map(({ id: attributeId, importance, text }) => (
            <tr className="border-b border-gray-700" key={text}>
              <th
                className="px-6 py-4 font-medium truncate whitespace-nowrap"
                title={text}
                scope="row"
              >
                {text}
              </th>
              <td className="px-6 py-4 text-xs font-semibold whitespace-nowrap">
                <span className="px-1.5 py-0.5 rounded-md shadow-md bg-slate-500">
                  {importance.toFixed(1)}
                </span>
              </td>
              {companies.map(({ id: companyId }) => (
                <td className="px-6 py-4" key={companyId}>
                  <Toggle
                    disabled={!!matrix}
                    checked={isChecked(attributeId, companyId)}
                    onChange={(checked) => {
                      handleChange(checked, attributeId, companyId);
                    }}
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
        <tfoot className="text-xs uppercase bg-slate-700 text-slate-400">
          <tr>
            <th className="px-6 py-4" colSpan={2} scope="col">
              Fit
            </th>
            {companyFits.map((fit, id) => (
              <td
                key={id}
                className={classNames('py-4 px-6 w-32 transition-colors', {
                  'bg-slate-500 text-white font-semibold':
                    bestFit && fit === bestFit,
                })}
              >
                {bestFit && fit === bestFit ? '✨' : ''}
                <span className="ml-2">{fit.toFixed(2)}%</span>
              </td>
            ))}
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default Matrix;

import { AppContext } from '../../../context/app/appContext';
import useContext from '../../../hooks/useContext';
import CompanyBadge from './CompanyBadge';
import ItemsGroup from '../ItemsGroup';

const Companies = () => {
  const { companies } = useContext(AppContext);

  return (
    <ItemsGroup isEmpty={companies.length === 0} itemName="firmy">
      {companies.map(({ id, ...props }) => (
        <CompanyBadge {...props} id={id} key={id} />
      ))}
    </ItemsGroup>
  );
};

export default Companies;

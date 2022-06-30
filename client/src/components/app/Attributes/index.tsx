import { AppContext } from '../../../context/app/appContext';
import useContext from '../../../hooks/useContext';
import AttributeBadge from './AttributeBadge';
import ItemsGroup from '../ItemsGroup';

const Attributes = () => {
  const { attributes } = useContext(AppContext);

  return (
    <ItemsGroup isEmpty={attributes.length === 0} itemName="parametre">
      {attributes.map(({ id, ...props }) => (
        <AttributeBadge {...props} id={id} key={id} />
      ))}
    </ItemsGroup>
  );
};

export default Attributes;

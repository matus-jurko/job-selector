import { ChangeEvent, FormEvent, useState } from 'react';
import { PlayIcon } from '@heroicons/react/solid';

import { ModalContext } from '../../context/modal/modalContext';
import { AlertContext } from '../../context/alert/alertContext';
import { AppContext } from '../../context/app/appContext';
import { removeWhiteSpace } from '../../utils';
import { ModalViews } from '../../types';
import { baseSteps } from '../../config';

import useContext from '../../hooks/useContext';
import SubmitField from '../layout/SubmitField';
import classNames from 'classnames';

interface NameFormProps {
  className?: string;
}

const NameForm = ({ className }: NameFormProps) => {
  const [value, setValue] = useState('');

  const { setName, setEditingId } = useContext(AppContext);
  const { openModal } = useContext(ModalContext);
  const { setAlert } = useContext(AlertContext);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevents page reloading...
    const name = removeWhiteSpace(value);

    if (!name) {
      setAlert('Nezadali ste vaše meno');
      return;
    }

    setName(name);
    setEditingId(undefined); // Reset editing id...
    openModal(ModalViews.FIRST_STEP, baseSteps[0].title);
  };

  return (
    <form
      className={classNames(className, 'w-full')}
      onSubmit={handleSubmit}
    >
      <SubmitField
        value={value}
        id="nameInput"
        onChange={handleChange}
        placeholder="Zadajte vaše meno"
        buttonTitle="Začať s výberom ideálnej práce"
        buttonIcon={PlayIcon}
        buttonText="Začať"
      />
    </form>
  );
};

export default NameForm;

import { ChangeEvent, FormEvent, useState } from 'react';
import { PlusIcon } from '@heroicons/react/solid';
import { v4 as uuidv4 } from 'uuid';

import { ModalContext } from '../../../context/modal/modalContext';
import { AlertContext } from '../../../context/alert/alertContext';
import { AppContext } from '../../../context/app/appContext';
import { removeWhiteSpace } from '../../../utils';
import { baseSteps } from '../../../config';
import { ModalViews } from '../../../types';

import useContext from '../../../hooks/useContext';
import SubmitField from '../../layout/SubmitField';
import StepCards from '../../layout/StepCards';
import Companies from '../../app/Companies';
import ModalFooter from '../ModalFooter';

const SecondStepView = () => {
  const [company, setCompany] = useState('');

  const { addCompany, companies, clearRelations } = useContext(AppContext);
  const { changeModalView } = useContext(ModalContext);
  const { setAlert } = useContext(AlertContext);

  const handleNext = () => {
    if (companies.length < 2) {
      setAlert('Je potrebné pridať aspoň 2 firmy');
      return;
    }

    clearRelations(); // Clears all existing relations...
    changeModalView(ModalViews.THIRD_STEP, baseSteps[2].title);
  };

  const handleBack = () => {
    changeModalView(ModalViews.FIRST_STEP, baseSteps[0].title);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCompany(e.currentTarget.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevents page reloading...
    const newCompany = removeWhiteSpace(company);

    if (!newCompany) {
      setAlert('Nezadali ste názov firmy');
      return;
    }

    if (companies.length >= 10) {
      setAlert('Môžete pridať maximálne 10 firiem');
      return;
    }

    if (companies.some(({ name }) => name === newCompany)) {
      setAlert('Firma s týmto názvom už existuje');
      return;
    }

    addCompany({ id: uuidv4(), name: newCompany });
    setCompany(''); // Clear input...
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <SubmitField
          value={company}
          id="companyInput"
          onChange={handleChange}
          placeholder="Napr. Apple, SpaceX, Tesla"
          buttonTitle="Pridať firmu"
          buttonIcon={PlusIcon}
          buttonText="Pridať"
        />
      </form>
      <Companies />
      <StepCards className="mt-5" steps={baseSteps} currentStepIndex={1} />
      <ModalFooter onNext={handleNext} onBack={handleBack} />
    </>
  );
};

export default SecondStepView;

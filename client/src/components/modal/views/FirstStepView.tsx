import { ChangeEvent, FormEvent, useState } from 'react';
import { PlusIcon } from '@heroicons/react/solid';
import { v4 as uuidv4 } from 'uuid';

import { ModalContext } from '../../../context/modal/modalContext';
import { AlertContext } from '../../../context/alert/alertContext';
import { AppContext } from '../../../context/app/appContext';
import { removeWhiteSpace } from '../../../utils';
import { ModalViews } from '../../../types';
import { baseSteps } from '../../../config';

import useContext from '../../../hooks/useContext';
import SubmitField from '../../layout/SubmitField';
import Attributes from '../../app/Attributes';
import StepCards from '../../layout/StepCards';
import ModalFooter from '../ModalFooter';

const FirstStepView = () => {
  const [importance, setImportance] = useState(5);
  const [attribute, setAttribute] = useState('');

  const { addAttribute, attributes } = useContext(AppContext);
  const { changeModalView } = useContext(ModalContext);
  const { setAlert } = useContext(AlertContext);

  const handleNext = () => {
    if (attributes.length < 2) {
      setAlert('Je potrebné pridať aspoň 2 parametre');
      return;
    }

    changeModalView(ModalViews.SECOND_STEP, baseSteps[1].title);
  };

  const handleAttributeChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAttribute(e.currentTarget.value);
  };

  const handleImportanceChange = (e: ChangeEvent<HTMLInputElement>) => {
    setImportance(Number(e.target.value));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevents page reloading...
    const newAttribute = removeWhiteSpace(attribute);

    if (!newAttribute) {
      setAlert('Nezadali ste text parametra');
      return;
    }

    if (attributes.length >= 10) {
      setAlert('Môžete pridať maximálne 10 parametrov');
      return;
    }

    if (attributes.some(({ text }) => text === newAttribute)) {
      setAlert('Tento parameter ste už pridali');
      return;
    }

    addAttribute({
      id: uuidv4(),
      text: newAttribute,
      importance: importance / 10,
    });

    setImportance(5);
    setAttribute('');
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label
          className="block mb-4 text-sm font-medium text-slate-300"
          htmlFor="attributeRange"
        >
          Váha dôležitosti parametra: {importance / 10}
        </label>
        <input
          id="attributeRange"
          className="block w-full h-2 mb-5 appearance-none cursor-pointer rounded-xl bg-gradient-to-r from-teal-500 to-green-500 animate-gradient focus:outline-none"
          title="Váha dôležitosti parametra"
          onChange={handleImportanceChange}
          value={importance}
          type="range"
          max={10}
          min={0}
        />
        <SubmitField
          value={attribute}
          id="attributeInput"
          onChange={handleAttributeChange}
          placeholder="Napr. chcem robiť na projekte sám"
          buttonTitle="Pridať parameter"
          buttonIcon={PlusIcon}
          buttonText="Pridať"
        />
      </form>
      <Attributes />
      <StepCards steps={baseSteps} currentStepIndex={0} />
      <ModalFooter onNext={handleNext} />
    </>
  );
};

export default FirstStepView;

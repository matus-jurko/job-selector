import { ModalContext } from '../../../context/modal/modalContext';
import { ModalViews } from '../../../types';
import { baseSteps } from '../../../config';

import useContext from '../../../hooks/useContext';
import StepCards from '../../layout/StepCards';
import ModalFooter from '../ModalFooter';
import Matrix from '../../app/Matrix';

const ThirdStepView = () => {
  const { changeModalView, closeModal } = useContext(ModalContext);

  const handleBack = () => {
    changeModalView(ModalViews.SECOND_STEP, baseSteps[1].title);
  };

  return (
    <>
      <Matrix />
      <StepCards className="mt-5" steps={baseSteps} currentStepIndex={2} />
      <ModalFooter
        nextButtonText="Dokončiť"
        onNext={closeModal}
        onBack={handleBack}
      />
    </>
  );
};

export default ThirdStepView;

import { Matrix as MatrixType, ModalViews } from '../../../types';
import { ModalContext } from '../../../context/modal/modalContext';
import { AlertContext } from '../../../context/alert/alertContext';
import { AppContext } from '../../../context/app/appContext';
import { baseSteps } from '../../../config';
import { api } from '../../../utils';

import useContext from '../../../hooks/useContext';
import StepCards from '../../layout/StepCards';
import ModalFooter from '../ModalFooter';
import Matrix from '../../app/Matrix';
import axios from 'axios';

const ThirdStepView = () => {
  const { setAlert } = useContext(AlertContext);
  const { changeModalView, closeModal } = useContext(ModalContext);
  const { name, attributes, companies, relations, editingId } =
    useContext(AppContext);

  const handleBack = () => {
    changeModalView(ModalViews.SECOND_STEP, baseSteps[1].title);
  };

  const handleNext = () => {
    const newMatrix: MatrixType = {
      data: { attributes, companies, relations },
      name: name as string,
    };

    const requestMethod = editingId
      ? axios.put(api(`/api/matrix/${editingId}`), newMatrix)
      : axios.post(api('/api/matrix'), newMatrix);

    requestMethod
      .then(({ data: { id } }) => (window.location.href = `/${id}`))
      .catch(() => setAlert('Nastala chyba pri ukladaní matice'));

    closeModal();
  };

  return (
    <>
      <Matrix />
      <StepCards className="mt-5" steps={baseSteps} currentStepIndex={2} />
      <ModalFooter
        nextButtonText="Dokončiť"
        onNext={handleNext}
        onBack={handleBack}
      />
    </>
  );
};

export default ThirdStepView;

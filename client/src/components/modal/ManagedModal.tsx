import { ModalContext } from '../../context/modal/modalContext';
import { ModalViews } from '../../types';

import FirstStepView from './views/FirstStepView';
import SecondStepView from './views/SecondStepView';
import ThirdStepView from './views/ThirdStepView';
import useContext from '../../hooks/useContext';
import BaseModal from './BaseModal';

const ManagedModal = () => {
  const { closeModal, isOpen, view, title } = useContext(ModalContext);

  return (
    <BaseModal title={title} closeModal={closeModal} isOpen={isOpen}>
      {view === ModalViews.FIRST_STEP && <FirstStepView />}
      {view === ModalViews.SECOND_STEP && <SecondStepView />}
      {view === ModalViews.THIRD_STEP && <ThirdStepView />}
    </BaseModal>
  );
};

export default ManagedModal;

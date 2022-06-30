import { PropsWithChildren, useReducer } from 'react';
import { handleModal, ModalContext, ModalState } from './modalContext';
import { modalReducer } from './modalReducer';
import { ModalTypes } from '../types';

const ModalProvider = ({ children }: PropsWithChildren<{}>) => {
  const initialState: ModalState = {
    isOpen: false,
    view: undefined,
    data: undefined,
    title: '',
  };

  const [state, dispatch] = useReducer(modalReducer, initialState);

  const openModal: handleModal = (view, title, payload) => {
    dispatch({ type: ModalTypes.OPEN_MODAL, view, title, payload });
  };

  const changeModalView: handleModal = (view, title, payload) => {
    dispatch({ type: ModalTypes.CHANGE_MODAL_VIEW, view, title, payload });
  };

  const closeModal = () => {
    dispatch({ type: ModalTypes.CLOSE_MODAL });
  };

  return (
    <ModalContext.Provider
      value={{
        openModal,
        changeModalView,
        closeModal,
        ...state,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;

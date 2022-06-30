import { ModalState } from './modalContext';
import { ModalViews } from '../../types';
import { ModalTypes } from '../types';

interface OpenModalAction {
  type: ModalTypes.OPEN_MODAL;
  view: ModalViews;
  title: string;
  payload?: any;
}

interface ChangeModalViewAction {
  type: ModalTypes.CHANGE_MODAL_VIEW;
  view: ModalViews;
  title: string;
  payload?: any;
}

interface CloseModalAction {
  type: ModalTypes.CLOSE_MODAL;
}

type ModalAction =
  | OpenModalAction
  | ChangeModalViewAction
  | CloseModalAction;

export const modalReducer = (
  state: ModalState,
  action: ModalAction
): ModalState => {
  switch (action.type) {
    case ModalTypes.OPEN_MODAL:
      return {
        ...state,
        data: action.payload,
        view: action.view,
        title: action.title,
        isOpen: true,
      };
    case ModalTypes.CHANGE_MODAL_VIEW:
      return {
        ...state,
        data: action.payload,
        view: action.view,
        title: action.title,
      };
    case ModalTypes.CLOSE_MODAL:
      return {
        ...state,
        isOpen: false,
      };
    default:
      return state;
  }
};

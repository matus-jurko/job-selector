import { ModalViews } from '../../types';
import { createContext } from 'react';

export interface ModalState {
  isOpen: boolean;
  view?: ModalViews;
  title: string;
  data?: any;
}

export type handleModal = (
  view: ModalViews,
  title: string,
  data?: any
) => void;

export interface ModalContextType extends ModalState {
  openModal: handleModal;
  changeModalView: handleModal;
  closeModal: () => void;
}

export const ModalContext = createContext<ModalContextType | null>(null);
ModalContext.displayName = 'ModalContext';

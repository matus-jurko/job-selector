import { createContext } from 'react';

export interface AlertState {
  id?: NodeJS.Timeout;
  message: string;
  isOpen: boolean;
}

export interface AlertContextType extends AlertState {
  setAlert: (message: string) => void;
  removeAlert: () => void;
}

export const AlertContext = createContext<AlertContextType | null>(null);
AlertContext.displayName = 'AlertContext';

import { PropsWithChildren, useReducer } from 'react';
import { AlertContext, AlertState } from './alertContext';
import { alertReducer } from './alertReducer';
import { AlertTypes } from '../types';

const AlertProvider = ({ children }: PropsWithChildren<{}>) => {
  const initialState: AlertState = {
    id: undefined,
    message: '',
    isOpen: false,
  };

  const [state, dispatch] = useReducer(alertReducer, initialState);

  const setAlert = (message: string) => {
    if (state.id) removeAlert();
    const id = setTimeout(() => removeAlert(), 5000);
    dispatch({ type: AlertTypes.SET_ALERT, payload: { id, message } });
  };

  const removeAlert = () => {
    if (state.id) clearTimeout(state.id);
    dispatch({ type: AlertTypes.REMOVE_ALERT });
  };

  return (
    <AlertContext.Provider
      value={{
        setAlert,
        removeAlert,
        ...state,
      }}
    >
      {children}
    </AlertContext.Provider>
  );
};

export default AlertProvider;

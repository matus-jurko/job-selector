import { AlertState } from './alertContext';
import { AlertTypes } from '../types';

interface SetAlertAction {
  type: AlertTypes.SET_ALERT;
  payload: {
    id: NodeJS.Timeout;
    message: string;
  };
}

interface RemoveAlertAction {
  type: AlertTypes.REMOVE_ALERT;
}

type AlertAction = SetAlertAction | RemoveAlertAction;

export const alertReducer = (
  state: AlertState,
  action: AlertAction
): AlertState => {
  switch (action.type) {
    case AlertTypes.SET_ALERT:
      return {
        ...state,
        message: action.payload.message,
        id: action.payload.id,
        isOpen: true,
      };
    case AlertTypes.REMOVE_ALERT:
      return {
        ...state,
        isOpen: false,
        id: undefined,
      };
    default:
      return state;
  }
};

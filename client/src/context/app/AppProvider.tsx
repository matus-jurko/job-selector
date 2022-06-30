import {
  Attribute,
  AttributeToCompany,
  Company,
  Matrix,
} from '../../types';

import { PropsWithChildren, useReducer } from 'react';
import { AppContext, AppState } from './appContext';
import { appReducer } from './appReducer';
import { AppTypes } from '../types';

const AppProvider = ({ children }: PropsWithChildren<{}>) => {
  const initialState: AppState = {
    editingId: undefined,
    matrix: undefined,
    name: undefined,
    relations: [],
    attributes: [],
    companies: [],
  };

  const [state, dispatch] = useReducer(appReducer, initialState);

  const loadMatrix = (matrix: Matrix) => {
    dispatch({ type: AppTypes.LOAD_MATRIX, payload: matrix });
  };

  const saveMatrix = (matrix: Matrix) => {
    dispatch({ type: AppTypes.SAVE_MATRIX, payload: matrix });
  };

  const addAttribute = (attribute: Attribute) => {
    dispatch({ type: AppTypes.ADD_ATTRIBUTE, payload: attribute });
  };

  const removeAttribute = (id: string) => {
    dispatch({ type: AppTypes.REMOVE_ATTRIBUTE, payload: id });
  };

  const addCompany = (company: Company) => {
    dispatch({ type: AppTypes.ADD_COMPANY, payload: company });
  };

  const removeCompany = (id: string) => {
    dispatch({ type: AppTypes.REMOVE_COMPANY, payload: id });
  };

  const setRelation = (relation: AttributeToCompany) => {
    dispatch({ type: AppTypes.SET_RELATION, payload: relation });
  };

  const removeRelation = (attributeId: string, companyId: string) => {
    dispatch({
      type: AppTypes.REMOVE_RELATION,
      payload: { attributeId, companyId },
    });
  };

  const clearRelations = () => {
    dispatch({ type: AppTypes.CLEAR_RELATIONS });
  };

  const setEditingId = (id: string | undefined) => {
    dispatch({ type: AppTypes.SET_EDITING_ID, payload: id });
  };

  const setName = (name: string) => {
    dispatch({ type: AppTypes.SET_NAME, payload: name });
  };

  return (
    <AppContext.Provider
      value={{
        loadMatrix,
        saveMatrix,
        addAttribute,
        removeAttribute,
        addCompany,
        removeCompany,
        setRelation,
        removeRelation,
        clearRelations,
        setEditingId,
        setName,
        ...state,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;

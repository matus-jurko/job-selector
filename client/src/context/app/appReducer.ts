import { Attribute, AttributeToCompany, Company } from '../../types';
import { AppState } from './appContext';
import { AppTypes } from '../types';

interface AddAttributeAction {
  type: AppTypes.ADD_ATTRIBUTE;
  payload: Attribute;
}

interface RemoveAttributeAction {
  type: AppTypes.REMOVE_ATTRIBUTE;
  payload: string;
}

interface AddCompanyAction {
  type: AppTypes.ADD_COMPANY;
  payload: Company;
}

interface RemoveCompanyAction {
  type: AppTypes.REMOVE_COMPANY;
  payload: string;
}

interface SetRelationAction {
  type: AppTypes.SET_RELATION;
  payload: AttributeToCompany;
}

interface RemoveRelationAction {
  type: AppTypes.REMOVE_RELATION;
  payload: {
    attributeId: string;
    companyId: string;
  };
}

interface ClearRelationsAction {
  type: AppTypes.CLEAR_RELATIONS;
}

interface SetNameAction {
  type: AppTypes.SET_NAME;
  payload: string;
}

type AppAction =
  | AddAttributeAction
  | RemoveAttributeAction
  | AddCompanyAction
  | RemoveCompanyAction
  | SetRelationAction
  | RemoveRelationAction
  | ClearRelationsAction
  | SetNameAction;

export const appReducer = (
  state: AppState,
  action: AppAction
): AppState => {
  switch (action.type) {
    case AppTypes.ADD_ATTRIBUTE:
      return {
        ...state,
        attributes: [...state.attributes, action.payload],
      };
    case AppTypes.REMOVE_ATTRIBUTE:
      return {
        ...state,
        attributes: state.attributes.filter(
          ({ id }: Attribute) => id !== action.payload
        ),
      };
    case AppTypes.ADD_COMPANY:
      return {
        ...state,
        companies: [...state.companies, action.payload],
      };
    case AppTypes.REMOVE_COMPANY:
      return {
        ...state,
        companies: state.companies.filter(
          ({ id }: Company) => id !== action.payload
        ),
      };
    case AppTypes.SET_RELATION:
      return {
        ...state,
        relations: [...state.relations, action.payload],
      };
    case AppTypes.REMOVE_RELATION:
      return {
        ...state,
        relations: state.relations.filter(
          ({ attribute, company }: AttributeToCompany) =>
            attribute !== action.payload.attributeId ||
            company !== action.payload.companyId
        ),
      };
    case AppTypes.CLEAR_RELATIONS:
      return {
        ...state,
        relations: [],
      };
    case AppTypes.SET_NAME:
      return {
        ...state,
        name: action.payload,
      };
    default:
      return state;
  }
};

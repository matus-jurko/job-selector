import { Attribute, AttributeToCompany, Company } from '../../types';
import { createContext } from 'react';

export interface AppState {
  relations: AttributeToCompany[];
  attributes: Attribute[];
  companies: Company[];
  name?: string;
}

export interface AppContextType extends AppState {
  addAttribute: (attribute: Attribute) => void;
  removeAttribute: (id: string) => void;
  addCompany: (company: Company) => void;
  removeCompany: (id: string) => void;
  setRelation: (relation: AttributeToCompany) => void;
  removeRelation: (attributeId: string, companyId: string) => void;
  clearRelations: () => void;
  setName: (name: string) => void;
}

export const AppContext = createContext<AppContextType | null>(null);
AppContext.displayName = 'AppContext';

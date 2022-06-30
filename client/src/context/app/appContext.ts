import {
  Attribute,
  AttributeToCompany,
  Company,
  Matrix,
} from '../../types';

import { createContext } from 'react';

export interface AppState {
  relations: AttributeToCompany[];
  attributes: Attribute[];
  companies: Company[];
  editingId?: string;
  matrix?: Matrix;
  name?: string;
}

export interface AppContextType extends AppState {
  loadMatrix: (matrix: Matrix) => void;
  saveMatrix: (matrix: Matrix) => void;
  addAttribute: (attribute: Attribute) => void;
  removeAttribute: (id: string) => void;
  addCompany: (company: Company) => void;
  removeCompany: (id: string) => void;
  setRelation: (relation: AttributeToCompany) => void;
  removeRelation: (attributeId: string, companyId: string) => void;
  clearRelations: () => void;
  setEditingId: (id: string | undefined) => void;
  setName: (name: string) => void;
}

export const AppContext = createContext<AppContextType | null>(null);
AppContext.displayName = 'AppContext';

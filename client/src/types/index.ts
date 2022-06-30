export enum ModalViews {
  FIRST_STEP = 'FIRST_STEP',
  SECOND_STEP = 'SECOND_STEP',
  THIRD_STEP = 'THIRD_STEP',
}

export type BaseStep = {
  title: string;
  description: string;
};

export type Attribute = {
  id: string;
  importance: number;
  text: string;
};

export type Company = {
  id: string;
  name: string;
};

export type AttributeToCompany = {
  attribute: string;
  company: string;
};

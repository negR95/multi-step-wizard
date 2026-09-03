export type WizardData = {
  firstName: string;
  lastName: string;
  email: string;
  age: string;
  gender: string;
  occupation: string;
  country: string;
  city: string;
  detailedAddress: string;
};

export type WizardState = {
  data: WizardData;
  isHydrated: boolean;
};

export type WizardAction =
  | { type: "HYDRATE"; payload: WizardData }
  | { type: "UPDATE"; payload: Partial<WizardData> }
  | { type: "RESET" };

export type WizardContextValue = WizardState & {
  updateData: (fields: Partial<WizardData>) => void;
  resetData: () => void;
};

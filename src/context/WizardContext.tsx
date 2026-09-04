"use client";

import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  type ReactNode,
} from "react";
import { EMPTY_WIZARD_DATA, WIZARD_DATA_KEYS } from "@/lib/wizardData";
import type {
  WizardAction,
  WizardContextValue,
  WizardData,
  WizardState,
} from "@/types/wizard";

const STORAGE_KEY = "persian-wizard-data-v1";

const initialState: WizardState = {
  data: EMPTY_WIZARD_DATA,
  isHydrated: false,
};

function wizardReducer(state: WizardState, action: WizardAction): WizardState {
  switch (action.type) {
    case "HYDRATE":
      return { data: action.payload, isHydrated: true };
    case "UPDATE":
      return { ...state, data: { ...state.data, ...action.payload } };
    case "RESET":
      return { data: EMPTY_WIZARD_DATA, isHydrated: true };
    default:
      return state;
  }
}

function restoreStoredData(): WizardData {
  try {
    const storedValue = window.localStorage.getItem(STORAGE_KEY);
    if (!storedValue) return EMPTY_WIZARD_DATA;

    const parsed: unknown = JSON.parse(storedValue);
    if (!parsed || typeof parsed !== "object") return EMPTY_WIZARD_DATA;

    const restored = { ...EMPTY_WIZARD_DATA };
    for (const key of WIZARD_DATA_KEYS) {
      const value = (parsed as Record<string, unknown>)[key];
      if (typeof value === "string") restored[key] = value;
    }
    return restored;
  } catch {
    window.localStorage.removeItem(STORAGE_KEY);
    return EMPTY_WIZARD_DATA;
  }
}

const WizardContext = createContext<WizardContextValue | null>(null);

export function WizardProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(wizardReducer, initialState);

  useEffect(() => {
    dispatch({ type: "HYDRATE", payload: restoreStoredData() });
  }, []);

  useEffect(() => {
    if (state.isHydrated) {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state.data));
    }
  }, [state.data, state.isHydrated]);

  const updateData = (fields: Partial<WizardData>) =>
    dispatch({ type: "UPDATE", payload: fields });

  const resetData = () => {
    window.localStorage.removeItem(STORAGE_KEY);
    dispatch({ type: "RESET" });
  };

  return (
    <WizardContext.Provider value={{ ...state, updateData, resetData }}>
      {children}
    </WizardContext.Provider>
  );
}

export function useWizard() {
  const context = useContext(WizardContext);
  if (!context)
    throw new Error("useWizard باید درون WizardProvider استفاده شود.");
  return context;
}

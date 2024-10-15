import { createContext } from 'react';

export interface EmailsContextValue {
  emails: string[];
  addEmail: (email: string) => void;
}

export const EmailsContext = createContext({} as EmailsContextValue);

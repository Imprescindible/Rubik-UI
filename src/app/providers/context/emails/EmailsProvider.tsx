// react
import { FC, ReactNode, useState } from 'react';
import { EmailsContext, EmailsContextValue } from './EmailsContext';

interface EmailsProviderProps {
  children: ReactNode;
}

export const EmailsProvider: FC<EmailsProviderProps> = ({ children }) => {
  const [emails, setEmails] = useState<EmailsContextValue['emails']>([]);

  const addEmail = (email: string) => {
    if (typeof email === 'string') {
      setEmails([...emails, email]);
    }
  };

  return (
    <EmailsContext.Provider value={{ emails: emails, addEmail: addEmail }}>
      {children}
    </EmailsContext.Provider>
  );
};

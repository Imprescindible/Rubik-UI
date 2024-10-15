// react
import { FC, ReactNode, useState } from 'react';
import { ThemeContext, ThemeContextType } from './ThemeContext';

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<ThemeContextType['theme']>('light');

  //   const toggleTheme = () => {
  //     switch (theme) {
  //       case 'light': {
  //         setTheme('dark');
  //         break;
  //       }

  //       case 'dark': {
  //         setTheme('light');
  //         break;
  //       }
  //     }
  //   };

  const toggleTheme = () => {
    if (theme === 'dark') {
      setTheme('light');
    }

    if (theme === 'light') {
      setTheme('dark');
    }
  };

  return (
    <ThemeContext.Provider value={{ theme: theme, toggleTheme: toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

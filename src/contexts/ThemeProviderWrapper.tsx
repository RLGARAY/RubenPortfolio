import React, { useState, createContext, useContext, ReactNode } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';

interface ThemeContextProps {
  toggleDarkMode: () => void;
  toggleLanguage: () => void;
  isDarkMode: boolean;
  language: string;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme debe ser utilizado dentro de un ThemeProviderWrapper');
  }
  return context;
};

interface ThemeProviderWrapperProps {
  children: ReactNode;
}

export const ThemeProviderWrapper: React.FC<ThemeProviderWrapperProps> = ({ children }) => {
  const [darkMode, setDarkMode] = useState(true);
  const [language, setLanguage] = useState<string>('es');

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
      primary: {
        main: '#3f51b5',
      },
      secondary: {
        main: '#f50057',
      },
      background: {
        default: darkMode ? '#1b1b37' : 'auto',
        paper: darkMode ? '#16202f' : '#fff',
      },
    },
    typography: {
      h1: {
        color: '#fff',
      },
      h5: {
        color: '#fff',
      },
    },
  });

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === 'en' ? 'es' : 'en'));
  };

  return (
    <ThemeContext.Provider
      value={{ toggleDarkMode, isDarkMode: darkMode, toggleLanguage, language }}
    >
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

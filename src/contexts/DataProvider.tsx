import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from 'react';
import { useTheme } from '../contexts/ThemeProviderWrapper';

// Interfaces
interface TextItem {
  subtitle: string;
  texts: string[];
  tags: string[];
  image: string;
  links: string[];
}

interface SectionData {
  title: string;
  content: TextItem[];
}

interface TextData {
  [section: string]: SectionData;
}

interface TextContextProps {
  textData: TextData | null;
  setTextData: Dispatch<SetStateAction<TextData | null>>;
}

interface TextProviderProps {
  children: ReactNode;
}

// Context
const TextContext = createContext<TextContextProps | undefined>(undefined);

export const TextProvider: React.FC<TextProviderProps> = ({ children }) => {
  const { language } = useTheme();
  const [textData, setTextData] = useState<TextData | null>(null);

  useEffect(() => {
    const fetchDataLocally = async () => {
      try {
        // Importa directamente el archivo JSON local
        const response = await import(`../../public/${language}_textDB.json`);
        setTextData(response.default);
      } catch (error) {
        console.error('Error fetching data locally:', error);
      }
    };

    fetchDataLocally();
  }, [language]);

  return <TextContext.Provider value={{ textData, setTextData }}>{children}</TextContext.Provider>;
};

export const useTextContext = () => {
  const context = useContext(TextContext);
  if (!context) {
    throw new Error('useTextContext must be used within a TextProvider');
  }
  return context.textData;
};

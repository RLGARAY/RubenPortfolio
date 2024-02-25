import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from 'react';

import { ref, getDownloadURL } from 'firebase/storage';
import { app, storage } from '../config/fire';
import { useTheme } from '../contexts/ThemeProviderWrapper';

interface TextItem {
  subtitle: string;
  texts: string[];
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

const TextContext = createContext<TextContextProps | undefined>(undefined);

export const TextProvider: React.FC<TextProviderProps> = ({ children }) => {
  const { language } = useTheme();
  const [textData, setTextData] = useState<TextData | null>(null);

  useEffect(() => {
    const fetchDataFromFirebase = async () => {
      try {
        const storageRef = ref(storage, `${language}_textDB.json`);
        const response = await getDownloadURL(storageRef);

        const fetchedTextData = await fetch(response).then((res) => res.json());
        setTextData(fetchedTextData);
      } catch (error) {
        console.error('Error fetching data from Firebase:', error);
      }
    };

    fetchDataFromFirebase();
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

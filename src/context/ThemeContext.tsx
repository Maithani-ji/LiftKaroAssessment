

import React, { createContext, useState, useEffect, useContext, ReactNode } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AppTheme, lightColors, darkColors, fontSizes, fontWeights, fontFamilies } from '../theme';

interface ThemeContextType {
  theme: AppTheme;
  isDarkMode: boolean;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  const theme: AppTheme = {
    colors: isDarkMode ? darkColors : lightColors,
    typography: {
      fontSizes,
      fontWeights,
      fontFamilies,
    },
  };

  useEffect(() => {
    const loadTheme = async () => {
      try {
        const storedTheme = await AsyncStorage.getItem('userTheme');
        if (storedTheme !== null) {
          setIsDarkMode(storedTheme === 'dark');
        }
      } catch (e) {
        console.error('Failed to load theme from storage', e);
      }
    };
    loadTheme();
  }, []);

  const toggleTheme = async () => {
    setIsDarkMode(prevMode => {
      const newMode = !prevMode;
      AsyncStorage.setItem('userTheme', newMode ? 'dark' : 'light').catch(e =>
        console.error('Failed to save theme to storage', e)
      );
      return newMode;
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

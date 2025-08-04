
import { lightColors, darkColors, ThemeColors } from './colors';
import { fontSizes, fontWeights, fontFamilies, ThemeTypography } from './typography';

// Export individual constants for direct access if needed
export { lightColors, darkColors, fontSizes, fontWeights, fontFamilies };

// Define the complete AppTheme structure
export type AppTheme = {
  colors: ThemeColors;
  typography: ThemeTypography;
};

// Define an initial theme (e.g., light theme as default)
export const initialTheme: AppTheme = {
  colors: lightColors, // Default to light colors
  typography: {
    fontSizes,
    fontWeights,
    fontFamilies,
  },
};
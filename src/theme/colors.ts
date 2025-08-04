interface ColorPalette {
  primary: string;
  secondary: string;
  background: string;
  text: string;
  card: string;
  border: string;
  notification: string;
}

export const lightColors: ColorPalette = {
  primary: '#007AFF',
  secondary: '#FF9500',
  background: '#F2F2F7',
  text: '#1C1C1E',
  card: '#FFFFFF',
  border: '#C6C6C8',
  notification: '#FF3B30',
};

export const darkColors: ColorPalette = {
  primary: '#0A84FF',
  secondary: '#FF9F0A',
  background: '#000000',
  text: '#FFFFFF',
  card: '#1C1C1E',
  border: '#38383A',
  notification: '#FF453A',
};

export type ThemeColors = typeof lightColors;
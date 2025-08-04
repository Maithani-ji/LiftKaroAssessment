// src/theme/typography.ts

import { responsiveFontSize } from '../utils/responsive'; // Import our responsive utility

interface FontSize {
  extraLarge: number;
  large: number;
  medium: number;
  regular: number;
  small: number;
  extraSmall: number;
}

interface FontWeight {
  light: '300';
  normal: '400';
  medium: '500';
  semiBold: '600';
  bold: '700';
}

// Standard font sizes, now calculated responsively
export const fontSizes: FontSize = {
  extraLarge: responsiveFontSize(32),
  large: responsiveFontSize(24),
  medium: responsiveFontSize(18),
  regular: responsiveFontSize(16),
  small: responsiveFontSize(14),
  extraSmall: responsiveFontSize(12),
};

export const fontWeights: FontWeight = {
  light: '300',
  normal: '400',
  medium: '500',
  semiBold: '600',
  bold: '700',
};

export const fontFamilies = {
  regular: 'System',
  medium: 'System',
  bold: 'System',
};

export type ThemeTypography = {
  fontSizes: FontSize;
  fontWeights: FontWeight;
  fontFamilies: typeof fontFamilies;
};
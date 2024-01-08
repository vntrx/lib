import type { DeepPartial, Theme } from '@chakra-ui/react';

export const fonts: DeepPartial<Theme['fonts']> = {
  body: 'Nexa',
  heading: 'Nexa',
};

export const fontSizes: DeepPartial<Theme['fontSizes']> = {
  xs: "0.625rem", /* 10px */
  sm: "0.75rem", /* 12px */
  md: "0.875rem", /* 14px */
  lg: "1rem", /* 16px */
  xl: "1.125rem", /* 18px */
  "2xl": "1.25rem", /* 20px */
  "3xl": "1.5rem", /* 24px */
  "4xl": "2rem", /* 32px */
  "5xl": "4rem", /* 64px */
};

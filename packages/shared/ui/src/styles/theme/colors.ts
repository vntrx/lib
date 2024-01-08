import type { DeepPartial, Theme } from "@chakra-ui/react";

/** extend additional color here */
const extendedColors: DeepPartial<
  Record<string, Theme["colors"]["blackAlpha"]>
> = {
  bayOfMany: {
    100: "#D5D6EA",
    200: "#ABAED4",
    300: "#6D71B5",
    400: "#43499F",
    500: "#2E3494",
  },
  royalBlue: {
    100: "#EDECFA",
    200: "#D0CDF4",
    300: "#B9B5E9",
    400: "#857DDA",
    500: "#6359DA",
    600: "#5045C9",
  },
  crimson: {
    100: "#F8D7E2",
    200: "#F3A0AF",
    300: "#DA7B90",
    400: "#E42A4B",
    500: "#E01237",
    600: "#E01237",
  },
  fruitSalad: {
    100: "#E9F6EB",
    200: "#B7D6B9",
    300: "#82B786",
    400: "#5EA363",
    500: "#4C9851",
    600: "#4C9851",
  },
  grey: {
    50: "#F4F4F4",
    100: "#EEEEEE",
    200: "#E2E2E3",
    300: "#BABABA",
    400: "#A8A8A8",
    500: "#8C8C8C",
    600: "#676868",
    700: "#474747",
    800: "#282929",
    900: "#191919",
  },
};

/** override chakra colors here */
const overridenChakraColors: DeepPartial<Theme["colors"]> = {};

export const colors = {
  ...overridenChakraColors,
  ...extendedColors,
};

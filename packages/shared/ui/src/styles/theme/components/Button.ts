import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const sizes = {
  "square-xs": defineStyle({
    px: "1",
    py: "1",
  }),
  "square-sm": defineStyle({
    px: "2",
    py: "2",
  }),
  "square-md": defineStyle({
    px: "3",
    py: "3",
  }),
  sm: defineStyle({
    height: "auto",
    minHeight: "auto",
    px: "3",
    pt: "2",
    pb: "1.5",
    fontSize: "md",
  }),
  md: defineStyle({
    height: "auto",
    minHeight: "auto",
    px: "4",
    pt: "3",
    pb: "2.5",
    fontSize: "lg",
  }),
  lg: defineStyle({
    height: "auto",
    minHeight: "auto",
    px: "5",
    pt: "4",
    pb: "3.5",
    fontSize: "2xl",
  }),
};

const brand = defineStyle((props) => {
  const { colorScheme: c } = props;
  return {
    fontFamily: "Nexa",
    bg: `${c}.600`,
    fontWeight: "400",
    color: "white",
    // padding: "25px",
    borderRadius: "lg",
    transition: "transform 0.15s ease-out, background 0.15s ease-out",
    _dark: {
      bg: `${c}.200`,
      color: "gray.800",
    },

    _hover: {
      bg: `${c}.500`,

      _dark: {
        bg: `${c}.300`,
      },
      _disabled: {
        bg: `${c}.500`,
      }
    },

    _active: {
      bg: `${c}.500`,

      _dark: {
        bg: `${c}.400`,
      },
    },
    _disabled: {
      bg: `${c}.500`,
      color: "gray.50",
      cursor: "not-allowed",
    },
  };
});

const outline = defineStyle(({ colorScheme: c }) => {
  return {
    bg: "white",
    borderRadius: "lg",
    borderColor: `${c}.600`,
    color: `${c}.600`,
    fontWeight: "normal",

    _hover: {
      bg: "gray.100",
    },
  };
});

const ghost = defineStyle(({ colorScheme: c }) => {
  return {
    bg: "white",
    border: "1px",
    borderColor: `${c}.200`,
    borderRadius: "lg",
    color: `${c}.800`,
    fontWeight: "normal",

    _hover: {
      bg: "gray.100",
    },
  };
});

const danger = defineStyle(({ colorScheme: c }) => {
  return {
    bg: `${c}.500`,
    borderRadius: "lg",
    color: "white",
    fontWeight: "400",
    fontFamily: "Nexa",
  };
});

const rounded = defineStyle((props) => {
  const { colorScheme: c } = props;
  return {
    fontFamily: "Nexa",
    bg: "white",
    fontWeight: "400",
    color: "grey.100",
    borderRadius: "3xl",
    transition: "transform 0.15s ease-out, background 0.15s ease-out",
  };
});

export const Button = defineStyleConfig({
  sizes,
  variants: {
    brand,
    outline,
    ghost,
    danger,
    rounded,
  },
  defaultProps: {
    colorScheme: "royalBlue",
    variant: "brand",
  },
});
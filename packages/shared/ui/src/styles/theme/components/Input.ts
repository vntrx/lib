import { inputAnatomy } from "@chakra-ui/anatomy";
import {
  createMultiStyleConfigHelpers,
  cssVar,
  defineStyle,
} from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(inputAnatomy.keys);

const $height = cssVar("input-height");
const $fontSize = cssVar("input-font-size");
const $padding = cssVar("input-padding");
const $borderRadius = cssVar("input-border-radius");

const baseStyle = definePartsStyle({
  addon: {
    height: "auto",
    color: "grey.600",
  },
  element: {
    height: "full",
    color: "grey.600",
  },
  field: {
    _placeholder: {
      fontSize: "lg",
      fontWeight: 400,
      color: "grey.300",
    },
  },
});

const size = {
  xl: defineStyle({
    [$fontSize.variable]: "1rem",
    [$padding.variable]: "1rem",
    [$borderRadius.variable]: "0.375rem",
    [$height.variable]: "3.25rem",
  }),
};

const sizes = {
  xl: definePartsStyle({
    field: size.xl,
    group: size.xl,
  }),
};

const outline = definePartsStyle((props) => {
  return {
    field: {
      borderColor: "grey.200",
      backgroundColor: "white",
      _hover: {
        borderColor: mode("grey.300", "whiteAlpha.400")(props),
      },
    },
    addon: {
      borderColor: mode("grey.200", "whiteAlpha.50")(props),
      bg: mode("grey.50", "whiteAlpha.300")(props),
    },
  };
});

export const Input = defineMultiStyleConfig({
  baseStyle,
  sizes,
  variants: {
    outline,
  },
  defaultProps: {
    size: "xl",
  },
});

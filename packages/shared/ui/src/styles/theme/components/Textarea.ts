import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const baseStyle = defineStyle({});

const outline = defineStyle(({ colorScheme: c }) => ({
  padding: "4",
  borderRadius: "md",
  borderColor: `${c}.200`,

  _placeholder: {
    color: `${c}.300`,
  },

  _hover: {
    borderColor: `${c}.300`,
  },
}));

export const Textarea = defineStyleConfig({
  baseStyle,
  variants: { outline },
  defaultProps: { variant: "outline", colorScheme: "grey" },
});

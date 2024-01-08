import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const baseStyle = defineStyle(({ colorScheme: c }) => ({
  mb: "1",
  fontWeight: "800",
  fontSize: "lg",
  color: `${c}.900`,
}));

export const FormLabel = defineStyleConfig({
  baseStyle,
  defaultProps: { colorScheme: "grey" },
});

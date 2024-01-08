import { extendTheme, withDefaultColorScheme } from "@chakra-ui/react";

import { colors } from "./colors";
import { components } from "./components";
import { config } from "./config";
import { fonts, fontSizes } from "./fonts";

/* export const inputTheme = defineStyleConfig({
  variants: { brand },
  defaultProps: {
    colorScheme: 'secondary',
    variant: 'brand'
  }
}) */

const theme = extendTheme({
  fonts,
  fontSizes,
  colors,
  config,
  components,
  ...withDefaultColorScheme({
    colorScheme: "royalBlue",
  }),
});

export default theme;

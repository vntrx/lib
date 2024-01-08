import type { Preview } from "@storybook/react";
import customTheme from '../src/styles/theme'

import '../src/styles/font.css'

const preview: Preview = {
  parameters: {
    chakra: {
      theme: customTheme,
      toastOptions:{
        defaultOptions: {
          isClosable: true,
          position: "top"
        }
      }
    },
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;

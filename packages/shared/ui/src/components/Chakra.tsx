import { ChakraProvider } from "@chakra-ui/react";

import Fonts from "./Fonts";

import customTheme from "../styles/theme/";

interface ChakraProps {
  children: React.ReactNode;
}

export const Chakra = ({ children }: ChakraProps) => {
  return (
    <ChakraProvider
      theme={customTheme}
      toastOptions={{
        defaultOptions: {
          isClosable: true,
          position: "top",
        },
      }}
    >
      <Fonts />
      {children}
    </ChakraProvider>
  );
};

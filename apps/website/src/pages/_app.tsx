import { ChakraProvider } from '@chakra-ui/react';
import { AppProps } from 'next/app';
import { theme } from '@vntrx/ui';

// import 'ui/src/styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider
      theme={theme}
      toastOptions={{
        defaultOptions: {
          isClosable: true,
          position: 'top',
        },
      }}
    >
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;

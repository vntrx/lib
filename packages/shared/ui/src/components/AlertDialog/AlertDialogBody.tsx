import React from "react";
import {
  AlertDialogBody as ChakraAlertDialogBody,
  ModalBodyProps,
  forwardRef,
} from "@chakra-ui/react";

export const AlertDialogBody = forwardRef<ModalBodyProps, "div">(
  (props, ref) => {
    return (
      <ChakraAlertDialogBody
        display="flex"
        flexDirection="column"
        alignItems="center"
        gap="6"
        px={{ base: "3", md: "0" }}
        pt="0"
        pb="12"
        ref={ref}
        {...props}
      />
    );
  }
);

import {
  ModalFooterProps,
  AlertDialogFooter as ChakraAlertDialogFooter,
  forwardRef,
} from "@chakra-ui/react";
import React from "react";

export const AlertDialogFooter = forwardRef<ModalFooterProps, "footer">(
  (props, ref) => {
    return (
      <ChakraAlertDialogFooter
        flexDirection={{ base: "column-reverse", md: "row" }}
        alignItems={{ base: "normal", md: "center" }}
        justifyContent={{ base: "normal", md: "center" }}
        gap="4"
        p="0"
        ref={ref}
        {...props}
      />
    );
  }
);

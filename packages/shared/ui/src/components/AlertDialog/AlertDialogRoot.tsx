import {
  AlertDialogContent,
  AlertDialogOverlay,
  AlertDialogProps,
  AlertDialog as AlertDialogWrapper,
  ModalContentProps,
  ModalOverlayProps
} from "@chakra-ui/react";
import { ReactNode } from "react";

export interface AlertDialogRootProps extends AlertDialogProps {
  children: ReactNode;
  options?: Partial<{
    overlay: ModalOverlayProps;
    content: ModalContentProps;
  }>;
}

export const AlertDialogRoot = ({
  children,
  options,
  ...rest
}: AlertDialogRootProps) => {
  return (
    <AlertDialogWrapper isCentered {...rest}>
      <AlertDialogOverlay {...options?.overlay}>
        <AlertDialogContent
          px={{ base: "6", md: "12" }}
          pt={{ base: "12", md: "8" }}
          pb={{ base: "10", md: "8" }}
          maxW={{ base: "full", md: "md" }}
          mt={{ base: "auto", md: "16" }}
          mb={{ base: "3", md: "16" }}
          mx={{ base: "3", md: "0" }}
          {...options?.content}
        >
          {children}
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialogWrapper>
  );
};

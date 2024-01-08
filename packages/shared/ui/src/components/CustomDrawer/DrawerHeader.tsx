import { DrawerHeader, ModalHeaderProps, forwardRef } from "@chakra-ui/react";

export const Header = forwardRef<ModalHeaderProps, "header">(
  ({ children, ...rest }, ref) => {
    return (
      <DrawerHeader gap={4} p={10} ref={ref} {...rest}>
        {children}
      </DrawerHeader>
    );
  }
);

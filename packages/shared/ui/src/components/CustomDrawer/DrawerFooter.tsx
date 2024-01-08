import { DrawerFooter, ModalFooterProps, forwardRef } from "@chakra-ui/react";

export const Footer = forwardRef<ModalFooterProps, "footer">((props, ref) => {
  const { children, ...rest } = props;

  return (
    <DrawerFooter gap={4} ref={ref} {...rest}>
      {children}
    </DrawerFooter>
  );
});

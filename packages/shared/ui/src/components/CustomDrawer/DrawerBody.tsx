import { DrawerBody, ModalBodyProps, forwardRef } from "@chakra-ui/react";

export const Body = forwardRef<ModalBodyProps, "div">((props, ref) => {
  const { children, ...rest } = props;

  return (
    <DrawerBody gap={4} p={10} ref={ref} {...rest}>
      {children}
    </DrawerBody>
  );
});

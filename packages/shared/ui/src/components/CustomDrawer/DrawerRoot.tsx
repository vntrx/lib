import {
  Drawer,
  DrawerContent,
  DrawerOverlay,
  DrawerProps,
} from "@chakra-ui/react";

export function DrawerRoot({
  children,
  isOpen,
  onClose,
  ...rest
}: DrawerProps) {
  return (
    <Drawer
      placement="right"
      size="md"
      isOpen={isOpen}
      onClose={onClose}
      {...rest}
    >
      <DrawerOverlay />
      <DrawerContent>{children}</DrawerContent>
    </Drawer>
  );
}

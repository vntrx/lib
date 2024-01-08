import { FormLabel, FormLabelProps, forwardRef } from "@chakra-ui/react";

export interface InputLabelProps extends FormLabelProps {
  children: React.ReactNode | string;
}

export const InputLabel = forwardRef<InputLabelProps, "label">((props, ref) => {
  const { children, ...rest } = props;

  return (
    <FormLabel fontWeight="800" mb="2" ref={ref} {...rest}>
      {children}
    </FormLabel>
  );
});

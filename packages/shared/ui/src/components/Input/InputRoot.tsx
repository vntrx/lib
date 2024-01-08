import { FormControl, FormControlProps, forwardRef } from '@chakra-ui/react';

export const InputRoot = forwardRef<FormControlProps, 'div'>((props, ref) => {
  const { children, ...rest } = props;

  return (
    <FormControl mb='24px' ref={ref} {...rest}>
      {children}
    </FormControl>
  );
});

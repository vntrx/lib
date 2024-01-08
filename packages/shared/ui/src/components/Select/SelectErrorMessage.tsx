import {
  FormErrorMessage,
  FormErrorMessageProps,
  forwardRef,
} from '@chakra-ui/react';

export const SelectErrorMessage = forwardRef<FormErrorMessageProps, 'div'>(
  (props, ref) => {
    const { children, ...rest } = props;

    return (
      <FormErrorMessage ref={ref} {...rest}>
        {children}
      </FormErrorMessage>
    );
  }
);

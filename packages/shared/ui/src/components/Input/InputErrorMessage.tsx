import {
  FormErrorMessage,
  FormErrorMessageProps,
  forwardRef,
} from '@chakra-ui/react';

export const InputErrorMessage = forwardRef<FormErrorMessageProps, 'div'>(
  (props, ref) => {
    const { children, ...rest } = props;

    return (
      <FormErrorMessage ref={ref} {...rest}>
        {children}
      </FormErrorMessage>
    );
  }
);

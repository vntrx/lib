import { Input, InputGroup, InputProps } from "@chakra-ui/react";
import { ForwardedRef, forwardRef } from "react";
import {
  FieldPath,
  FieldValues,
  RegisterOptions,
  useFormContext,
  UseFormRegisterReturn,
} from "react-hook-form";

export interface InputFieldProps<TFieldValues extends FieldValues>
  extends InputProps {
  name: FieldPath<TFieldValues>;
  validation?: RegisterOptions<TFieldValues, FieldPath<TFieldValues>>;
  isControlled?: boolean;
  children?: React.ReactNode;
}

function InputFieldComponent<TFieldValues extends FieldValues>(
  props: InputFieldProps<TFieldValues>,
  ref: ForwardedRef<HTMLInputElement>
) {
  const { register } = useFormContext<TFieldValues>();
  const { name, validation, isControlled = false, children, ...rest } = props;

  let registerProps: UseFormRegisterReturn<FieldPath<TFieldValues>> | null =
    null;
  if (!isControlled) registerProps = register(name, validation);

  return (
      <Input
        {...{
          ...registerProps,
          name: registerProps?.name ?? name,
          ref: registerProps?.ref ?? ref,
        }}
        {...rest}
      />
  );
}

export const InputField = forwardRef(InputFieldComponent) as <
  TFieldValues extends FieldValues
>(
  props: InputFieldProps<TFieldValues> & {
    ref?: ForwardedRef<HTMLInputElement>;
  }
) => ReturnType<typeof InputFieldComponent>;

import { Flex, TextProps, HTMLChakraProps, FlexProps } from "@chakra-ui/react";
import {
  FieldValues,
  FormProvider,
  UseFormHandleSubmit,
  UseFormReturn,
} from "react-hook-form";

export interface FormProps<
  TFieldValues extends FieldValues = FieldValues,
  TContext = any,
  TTransformedValues extends FieldValues | undefined = undefined
> extends FlexProps {
  children: React.ReactNode;
  methods: UseFormReturn<TFieldValues, TContext, TTransformedValues>;
}

export default function Form<
  TFieldValues extends FieldValues = FieldValues,
  TContext = any,
  TTransformedValues extends FieldValues | undefined = undefined
>({
  methods,
  children,
  ...formProps
}: FormProps<TFieldValues, TContext, TTransformedValues>) {
  return (
    <FormProvider {...methods}>
      <Flex as="form" flexDir="column" height="full" {...formProps}>
        {children}
      </Flex>
    </FormProvider>
  );
}

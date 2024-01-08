import type { Meta, StoryObj } from "@storybook/react";
import { useForm, FormProvider, useFormContext } from "react-hook-form";
import Form from "./Form";
import { Input } from "../Input";
import { Button, Heading } from "@chakra-ui/react";

interface FormData {
  fullName: string;
}

const meta: Meta<typeof Form> = {
  component: Form,
  decorators: [
    (Story) => {
      const methods = useForm<FormData>();

      function onSubmit(data: FormData) {
        alert("Submited");
      }

      return (
        <Form onSubmit={methods.handleSubmit(onSubmit)} methods={methods}>
          <Heading mb="2">Form Example</Heading>

          <Story />

          <Button type="submit">Submit</Button>
          <pre>{JSON.stringify(methods.watch(), null, 2)}</pre>
        </Form>
      );
    },
  ],
};

export default meta;
type Story = StoryObj<typeof Form>;

export const Default: Story = {
  render: () => {
    const {
      formState: { errors },
    } = useFormContext<FormData>();

    const Field = Input.Field<FormData>;

    return (
      <Input.Root isInvalid={!!errors.fullName}>
        <Input.Label>Full name</Input.Label>
        <Field
          name="fullName"
          placeholder="Type your name"
          validation={{ required: true }}
        />
        <Input.ErrorMessage>Full name is required</Input.ErrorMessage>
      </Input.Root>
    );
  },
};

import type { Meta, StoryObj } from "@storybook/react";
import { useForm, FormProvider } from "react-hook-form";
import { Input } from ".";
import { Icon, InputLeftAddon, InputLeftElement } from "@chakra-ui/react";
import { UilUser } from "@iconscout/react-unicons";

const meta: Meta<typeof Input.Field> = {
  component: Input.Field,
  decorators: [
    (Story) => {
      const methods = useForm();

      return (
        <FormProvider {...methods}>
          <Story />
        </FormProvider>
      );
    },
  ],
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  render: () => {
    return (
      <Input.Root>
        <Input.Label>Full name</Input.Label>
        <Input.Field name="fullName" placeholder="Type your name" />
        <Input.ErrorMessage>Full name is required</Input.ErrorMessage>
      </Input.Root>
    );
  },
};

export const WithLeftElement: Story = {
  render: () => {
    return (
      <Input.Root>
        <Input.Label>Full name</Input.Label>
        <Input.Field name="fullName" placeholder="Type your name" isRequired>
          <InputLeftElement pointerEvents="none">
            <Icon as={UilUser} h="1rem" w="1rem" />
          </InputLeftElement>
        </Input.Field>
        <Input.ErrorMessage>Full name is required</Input.ErrorMessage>
      </Input.Root>
    );
  },
};

export const WithLeftAddon: Story = {
  render: () => {
    return (
      <Input.Root>
        <Input.Label>Full name</Input.Label>
        <Input.Field name="fullName" placeholder="Type your name" isRequired>
          <InputLeftAddon>
            <Icon as={UilUser} h="1rem" w="1rem" />
          </InputLeftAddon>
        </Input.Field>
        <Input.ErrorMessage>Full name is required</Input.ErrorMessage>
      </Input.Root>
    );
  },
};

export const Invalid: Story = {
  render: () => {
    return (
      <Input.Root isRequired isInvalid>
        <Input.Label>Full name</Input.Label>
        <Input.Field name="fullName" placeholder="Type your name" isRequired />
        <Input.ErrorMessage>Full name is required</Input.ErrorMessage>
      </Input.Root>
    );
  },
};

import type { Meta, StoryObj } from '@storybook/react';
import { useForm, FormProvider } from 'react-hook-form';

import { Select } from './';
import MenuList from './Parts/MenuList';
import { Flex } from '@chakra-ui/react';

const options = [
  { label: 'Opção 1', value: 'opcao1' },
  { label: 'Opção 2', value: 'opcao2' },
  { label: 'Opção 3', value: 'opcao3' },
  { label: 'Opção 4', value: 'opcao4' },
  { label: 'Opção 5', value: 'opcao5' },
];

const meta: Meta<typeof Select.Field> = {
  component: Select.Field,
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
type Story = StoryObj<typeof Select>;

export const Default: Story = {
  render: () => {
    return (
      <Select.Root>
        <Select.Label>Options</Select.Label>
        <Select.Field name='option' options={options} />
        <Select.ErrorMessage>Option is required</Select.ErrorMessage>
      </Select.Root>
    );
  },
};

export const ManySelect: Story = {
  render: () => {
    return (
      <Flex flexDir='column' gap='3'>
        <Select.Root>
          <Select.Label>Options 1</Select.Label>
          <Select.Field name='firstOption' options={options} />
          <Select.ErrorMessage>Option is required</Select.ErrorMessage>
        </Select.Root>

        <Select.Root>
          <Select.Label>Options 2</Select.Label>
          <Select.Field name='secondOption' options={options} />
          <Select.ErrorMessage>Option is required</Select.ErrorMessage>
        </Select.Root>

        <Select.Root>
          <Select.Label>Options 3</Select.Label>
          <Select.Field name='thirdOption' options={options} />
          <Select.ErrorMessage>Option is required</Select.ErrorMessage>
        </Select.Root>
      </Flex>
    );
  },
};

export const isMulti: Story = {
  render: () => {
    return (
      <Select.Root>
        <Select.Label>Options</Select.Label>
        <Select.Field name='option' isMulti options={options} />
        <Select.ErrorMessage>Option is required</Select.ErrorMessage>
      </Select.Root>
    );
  },
};

export const withVirtualizedMenuList: Story = {
  render: () => {
    return (
      <Select.Root>
        <Select.Label>Options</Select.Label>
        <Select.Field
          name='option'
          components={{
            MenuList,
          }}
          options={options}
        />
        <Select.ErrorMessage>Option is required</Select.ErrorMessage>
      </Select.Root>
    );
  },
};

export const Invalid: Story = {
  render: () => {
    return (
      <Select.Root isRequired isInvalid>
        <Select.Label>Options</Select.Label>
        <Select.Field name='option' options={options} />
        <Select.ErrorMessage>Option is required</Select.ErrorMessage>
      </Select.Root>
    );
  },
};

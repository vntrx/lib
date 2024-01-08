import type { Meta, StoryObj } from "@storybook/react";

import { ContextMenu } from "./ContextMenu";
import { UilPen, UilTrashAlt } from "@iconscout/react-unicons";

const meta: Meta<typeof ContextMenu> = {
  component: ContextMenu,
};

export default meta;
type Story = StoryObj<typeof ContextMenu>;

export const Default: Story = {
  render: () => {

    return (
      <>
        <ContextMenu options={[
          {
            icon: <UilPen size='16px' />,
            label: 'Editar',
            action: () => {
              // do nothing
            }
          },
          {
            label: 'Excluir',
            icon: <UilTrashAlt size={14} />,
            color: '#E01237',
            action: () => {
              // do nothing
            },
          },
        ]} />
      </>
    );
  },
};
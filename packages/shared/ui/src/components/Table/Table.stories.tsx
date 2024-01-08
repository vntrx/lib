import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions'
import { createColumnHelper } from '@tanstack/react-table';
import { Table } from '.';

type Person = {
  firstName: string;
  lastName: string;
  age: number;
  visits: number;
  status: string;
  progress: number;
};

const meta: Meta<typeof Table.Root> = {
  component: Table.Root,
};

export default meta;
type Table = typeof Table.Root & typeof Table.Header;

type Story = StoryObj<Table>;

export const Default: Story = {
  args: {
    showLabels: true,
    tableCaption: 'Table Caption',
  },
  render: function Render(args) {
    const defaultData: Person[] = [
      {
        firstName: 'tanner',
        lastName: 'linsley',
        age: 24,
        visits: 100,
        status: 'In Relationship',
        progress: 50,
      },
      {
        firstName: 'tandy',
        lastName: 'miller',
        age: 40,
        visits: 40,
        status: 'Single',
        progress: 80,
      },
      {
        firstName: 'joe',
        lastName: 'dirte',
        age: 45,
        visits: 20,
        status: 'Complicated',
        progress: 10,
      },
    ];

    const columnHelper = createColumnHelper<Person>();

    const columns = [
      columnHelper.display({
        header: 'firstName',
        cell: ({ row }) => row.original.firstName,
      }),
    ];

    return (
      <Table.Root columns={columns} data={defaultData}>
        <Table.Container>
          <Table.Header
            tableCaption={args.tableCaption}
            showLabels={args.showLabels}
          />
          <Table.Body />

          <Table.Pagination
            defaultPageSize={10}
            initialPageIndex={0}
            pageCount={15}
            onChangePageIndex={(index) => console.log('onChangePageIndex:', index)}
          />
        </Table.Container>
      </Table.Root>
    );
  },
};

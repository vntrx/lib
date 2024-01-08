import { Flex, TableCaption, Text, Th, Thead, Tr } from '@chakra-ui/react';
import { RowData, flexRender } from '@tanstack/react-table';

import { useTableContext } from './TableContext';

export interface TableHeaderProps {
  tableCaption: string;
  children?: React.ReactNode;
  showLabels?: boolean;
}

export function TableHeader<TData extends RowData>({
  tableCaption,
  children,
  showLabels = true,
}: TableHeaderProps) {
  const table = useTableContext<TData>();

  return (
    <>
      <TableCaption fontFamily='Nexa' fontWeight="400" placement='top' mt='0'>
        <Flex justifyContent='space-between' alignItems='center'>
          <Text
            fontWeight='800'
            fontSize='xl'
            fontFamily='Nexa'
            color='grey.900'
          >
            {tableCaption}
          </Text>
          {children}
        </Flex>
      </TableCaption>
      {showLabels && (
        <Thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <Tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <Th
                    key={header.id}
                    onClick={header.column.getToggleSortingHandler()}
                  >
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                  </Th>
                );
              })}
            </Tr>
          ))}
        </Thead>
      )}
    </>
  );
}

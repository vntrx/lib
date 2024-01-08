import { Tbody, Td, Tr } from '@chakra-ui/react';
import { RowData, flexRender } from '@tanstack/react-table';

import { useTableContext } from './TableContext';

export function TableBody<TData extends RowData>() {
  const table = useTableContext<TData>();

  return (
    <Tbody>
      {table.getRowModel().rows.map((row) => (
        <Tr key={row.id}>
          {row.getVisibleCells().map((cell) => {
            return (
              <Td key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </Td>
            );
          })}
        </Tr>
      ))}
    </Tbody>
  );
}

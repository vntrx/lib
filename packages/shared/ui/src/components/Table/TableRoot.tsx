import { Grid } from '@chakra-ui/react';
import {
  ColumnDef,
  getCoreRowModel,
  getSortedRowModel,
  RowData,
  SortingState,
  useReactTable,
} from '@tanstack/react-table';
import { useState } from 'react';
import { TableContextProvider } from './TableContext';

export interface TableRootProps<TData extends RowData, TValue = unknown> {
  data: TData[];
  children: React.ReactNode;
  columns: ColumnDef<TData, TValue>[];
}


export function TableRoot<TData extends RowData, TValue = unknown>({
  data,
  children,
  columns,
}: TableRootProps<TData, TValue>) {
  const [sorting, setSorting] = useState<SortingState>([]);

  const table = useReactTable<TData>({
    columns,
    data,
    manualPagination: true,
    getCoreRowModel: getCoreRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    state: {
      sorting,
    },
  });

  return (
    <Grid gap='6'>
      <TableContextProvider value={table}>{children}</TableContextProvider>
    </Grid>
  );
}

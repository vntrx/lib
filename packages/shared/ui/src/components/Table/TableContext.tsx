import { RowData, Table } from '@tanstack/react-table';
import { ReactNode, createContext, useContext } from 'react';

export const TableContext = createContext<unknown>(null);

export function useTableContext<TData extends RowData>() {
  const value = useContext(TableContext) as Table<TData> | null;

  if (!value) {
    throw new Error(
      'TableContext: no value provided. You may have forgotten to wrap a Provider.'
    );
  }

  return value;
}

interface TableContextProviderProps<TData extends RowData> {
  value: Table<TData>;
  children: ReactNode;
}

export function TableContextProvider<TData extends RowData>({
  value,
  children,
}: TableContextProviderProps<TData>) {
  return (
    <TableContext.Provider value={value}>{children}</TableContext.Provider>
  );
}

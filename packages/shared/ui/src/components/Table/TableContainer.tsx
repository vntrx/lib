import { Table as TableChakra, TableContainer as TableWrapper } from '@chakra-ui/react';

export interface TableContainerProps {
  children: React.ReactNode;
}

export function TableContainer({ children }: TableContainerProps) {
  return (
    <TableWrapper>
      <TableChakra>{children}</TableChakra>
    </TableWrapper>
  );
}

import { Button, Flex } from '@chakra-ui/react';
import * as Icons from '@iconscout/react-unicons';
import { RowData } from '@tanstack/react-table';
import { useEffect, useMemo, useState } from 'react';
import { useTableContext } from './TableContext';

export interface TablePaginateProps {
  initialPageIndex?: number;
  defaultPageSize?: number;
  pageCount?: number;
  onChangePageIndex: (index: number) => void;
}

export function TablePaginate<TData extends RowData>({
  initialPageIndex = 0,
  defaultPageSize = 10,
  pageCount = -1,
  onChangePageIndex,
}: TablePaginateProps) {
  const [{ pageIndex, pageSize }, setPagination] = useState({
    pageIndex: initialPageIndex,
    pageSize: defaultPageSize,
  });
  const table = useTableContext<TData>();

  const pagination = useMemo(
    () => ({
      pageIndex,
      pageSize,
    }),
    [pageIndex, pageSize]
  );

  table.setOptions((prev) => ({
    ...prev,
    pageCount,
    onPaginationChange: setPagination,
    state: {
      ...prev.state,
      pagination,
    },
  }));

  function handleGoToFirstPage() {
    table.setPageIndex(0);
    onChangePageIndex(0);
  }

  function handlePreviousPage() {
    table.previousPage();
    onChangePageIndex(table.getState().pagination.pageIndex - 1);
  }

  function goToPageIndex(pageIndex: number) {
    table.setPageIndex(pageIndex);
    onChangePageIndex(pageIndex);
  }

  function handleNextPage() {
    table.nextPage();
    onChangePageIndex(table.getState().pagination.pageIndex + 1);
  }

  function handleGoToLastPage() {
    const lastPageIndex = table.getPageCount() - 1;

    table.setPageIndex(lastPageIndex);
    onChangePageIndex(lastPageIndex);
  }

  const currentPageOffset = 2;
  const selectablePages: React.ReactNode[] = [];
  for (
    let page = pageIndex - currentPageOffset;
    page <= pageIndex + currentPageOffset;
    page++
  ) {
    if (page >= 0 && page <= table.getPageCount() - 1) {
      selectablePages.push(
        <Button
          key={page}
          onClick={() => goToPageIndex(page)}
          variant={page === pageIndex ? 'outline' : 'ghost'}
          colorScheme={page === pageIndex ? 'royalBlue' : 'gray'}
          size='square-sm'
          width='8'
          height='8'
          fontSize='lg'
        >
          {page + 1}
        </Button>
      );
    }
  }

  useEffect(() => {
    if (pageIndex + 1 > pageCount) {
      handleGoToFirstPage();
    }
  }, [pageCount, pageIndex]);

  return (
    <Flex placeSelf='self-end' flexWrap='wrap' alignItems='center' gap='2'>
      <Button
        onClick={handleGoToFirstPage}
        isDisabled={!table.getCanPreviousPage()}
        variant='ghost'
        colorScheme='gray'
        size='square-xs'
      >
        <Icons.UilAngleDoubleLeft size={24} />
      </Button>
      <Button
        onClick={handlePreviousPage}
        isDisabled={!table.getCanPreviousPage()}
        variant='ghost'
        colorScheme='gray'
        size='square-xs'
      >
        <Icons.UilArrowLeft />
      </Button>

      {selectablePages}

      <Button
        onClick={handleNextPage}
        isDisabled={!table.getCanNextPage()}
        variant='ghost'
        colorScheme='gray'
        size='square-xs'
      >
        <Icons.UilArrowRight />
      </Button>
      <Button
        onClick={handleGoToLastPage}
        isDisabled={!table.getCanNextPage()}
        variant='ghost'
        colorScheme='gray'
        size='square-xs'
      >
        <Icons.UilAngleDoubleRight />
      </Button>
    </Flex>
  );
}

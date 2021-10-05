import React, { FC, useEffect, useState } from 'react';

import { Column, Filters, Sorting } from './types';
import { StyledTable as Table } from './styled';
import { TableFooter } from './TableFooter/TableFooter';
import { DEFAULT_PER_PAGE } from './config';
import { TableParams, Action } from './types';
import { DateCell } from './DateCell/DateCell';
import { HeaderCell } from './HeaderCell/HeaderCell';

interface DataTableProps {
  fetchData: (
    params: TableParams,
    search?: string,
    filters?: Filters
  ) => Promise<any>;
  columns: Column[];
  searchText?: string;
  rowKeyPrefix?: string;
  filters?: Filters;
  onMetaUpdate?: (meta: any) => void;
}

const DataTable: FC<DataTableProps> = ({
  fetchData,
  rowKeyPrefix = 'data-table',
  searchText,
  filters,
  onMetaUpdate,
  columns,
  ...tableProps
}) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [pagination, setPagination] = useState<TableParams>({
    currentPage: 1,
    perPage: DEFAULT_PER_PAGE,
  });
  const [totalPages, setTotalPages] = useState(1);
  const [sorting, setSorting] = useState<Sorting | undefined>();

  const handleColumnSort = (columnKey: string) => {
    setSorting((prevState) => ({
      column: columnKey,
      direction:
        prevState?.column === columnKey && prevState?.direction === 'ASC'
          ? 'DESC'
          : 'ASC',
    }));
  };

  const sortableColumns: Column[] = columns.map((column) => ({
    ...column,
    onHeaderCell: column.sortable
      ? ({ key }: Column) => ({
          onClick: () => handleColumnSort(key),
          sortDirection:
            sorting?.column === key ? sorting.direction : undefined,
          sortable: column.sortable,
        })
      : undefined,
  }));

  useEffect(() => {
    if (!fetchData) return;

    setLoading(true);

    fetchData({
      ...pagination,
      search: searchText,
      filters,
    })
      .then((response) => {
        const { data, meta } = response;
        setData(data);
        if (meta && meta.totalPages) {
          setTotalPages(meta.totalPages);
        }

        onMetaUpdate && onMetaUpdate(meta);
      })
      .catch((error) => {
        console.error('Error!', error);
      })
      .finally(() => setLoading(false));
  }, [fetchData, pagination, setTotalPages, searchText, filters, onMetaUpdate]);

  const handlePageChange = (currentPage: number) => {
    setPagination((prevState) => ({ ...prevState, currentPage }));
  };

  const handlePerPageChange = (perPage: number) => {
    setPagination((prevState) => ({ ...prevState, perPage }));
  };

  const getRowKey = (prefix: string) => (record: any) => {
    return `${prefix}-${record.id || record.key}`;
  };

  return (
    <Table
      {...tableProps}
      columns={sortableColumns}
      rowKey={getRowKey(rowKeyPrefix)}
      isLoading={isLoading}
      data={data}
      components={{
        header: {
          cell: HeaderCell,
        },
      }}
      footer={() => (
        <TableFooter
          pagination={pagination}
          totalPages={totalPages}
          onPageChange={handlePageChange}
          onPerPageChange={handlePerPageChange}
        />
      )}
    />
  );
};

export default DataTable;

export type { Action, TableParams };
export { DateCell };

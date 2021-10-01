import React, { FC, useEffect, useState } from 'react';

import { Column } from './types';
import { StyledTable as Table } from './styled';
import { TableFooter } from './TableFooter/TableFooter';
import { DEFAULT_PER_PAGE } from './config';
import { TableParams, Action } from './types';
import { DateCell } from './DateCell/DateCell';

interface DataTableProps {
  fetchData: (params: TableParams) => Promise<any>;
  columns: Column[];
  rowKeyPrefix?: string;
}

const DataTable: FC<DataTableProps> = ({
  fetchData,
  rowKeyPrefix = 'data-table',
  ...tableProps
}) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [pagination, setPagination] = useState<TableParams>({
    currentPage: 1,
    perPage: DEFAULT_PER_PAGE,
  });
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    if (!fetchData) return;

    setLoading(true);
    fetchData(pagination)
      .then((response) => {
        const { data, meta } = response;
        setData(data);
        if (meta && meta.totalPages) {
          setTotalPages(meta.totalPages);
        }
      })
      .catch((error) => {
        console.error('Error!', error);
      })
      .finally(() => setLoading(false));
  }, [fetchData, pagination, setTotalPages]);

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
      rowKey={getRowKey(rowKeyPrefix)}
      isLoading={isLoading}
      data={data}
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

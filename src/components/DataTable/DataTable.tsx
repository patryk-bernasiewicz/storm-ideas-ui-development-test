import React, { FC, useEffect, useState } from 'react';

import { Column } from './types';
import { StyledTable as Table, DateCell } from './styled';
import { TableFooter } from './TableFooter/TableFooter';
import { DEFAULT_PER_PAGE } from './config';
import { TableParams, Action } from './types';

interface DataTableProps {
  fetchData: (params: TableParams) => Promise<any>;
  columns: Column[];
  rowKey?: string;
}

export type { Action, TableParams };

export { DateCell };

const DataTable: FC<DataTableProps> = ({
  rowKey = 'data-table',
  fetchData,
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
        console.log(
          `====== data: (page ${pagination.currentPage}): `,
          response.data
        );
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

  return (
    <Table
      {...tableProps}
      rowKey={rowKey}
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

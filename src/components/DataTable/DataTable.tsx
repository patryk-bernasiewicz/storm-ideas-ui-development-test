import React, { FC, useEffect, useState } from 'react';

import { Column } from './types';
import { StyledTable as Table } from './styled';
import { TableFooter } from './TableFooter/TableFooter';

interface DataTableProps {
  fetchData: (params: Pagination) => Promise<any>;
  columns: Column[];
}

interface Pagination {
  currentPage: number;
  totalPages: number;
  perPage: number;
}

export type TableParams = Pagination;

const DataTable: FC<DataTableProps> = ({ fetchData, ...tableProps }) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [pagination, setPagination] = useState<Pagination>({
    currentPage: 1,
    totalPages: 18,
    perPage: 10,
  });

  useEffect(() => {
    setLoading(true);
    fetchData(pagination)
      .then(({ data }) => {
        setData(data);
      })
      .catch((error) => {
        console.error('Error!', error);
      })
      .finally(() => setLoading(false));
  }, [fetchData, pagination]);

  const handlePageChange = (currentPage: number) => {
    setPagination((prevState) => ({ ...prevState, currentPage }));
  };

  const handlePerPageChange = (perPage: number) => {
    setPagination((prevState) => ({ ...prevState, perPage }));
  };

  return (
    <Table
      {...tableProps}
      isLoading={isLoading}
      data={data}
      footer={() => (
        <TableFooter
          pagination={pagination}
          onPageChange={handlePageChange}
          onPerPageChange={handlePerPageChange}
        />
      )}
    />
  );
};

export default DataTable;

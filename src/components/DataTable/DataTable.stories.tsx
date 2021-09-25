import React from 'react';
import { format } from 'date-fns';
import faker from 'faker';

import DataTable, { TableParams } from './DataTable';
import { Column } from './types';
import Status from '../../components/Status/Status';
import { EmptyCell } from './EmptyCell/EmptyCell';
import { StatusValue } from '../../utils/types';

export default {
  title: 'Components/DataTable',
  component: DataTable,
};

const columns: Column[] = [
  { key: 'id', dataIndex: 'id', title: 'ID' },
  { key: 'name', dataIndex: 'name', title: 'Name' },
  {
    key: 'status',
    dataIndex: 'status',
    title: 'Status',
    render: (status: StatusValue) =>
      status ? <Status value={status} /> : <EmptyCell />,
  },
  {
    key: 'address',
    dataIndex: 'address',
    title: 'Address',
  },
  {
    key: 'date_created',
    dataIndex: 'date_created',
    title: 'Date of creation',
    render: (date: Date) => format(date, 'LLL dd, K:mm a'),
  },
];

const statuses = [StatusValue.Draft, StatusValue.Live, StatusValue.Past];

const fetchData = (params: TableParams) =>
  new Promise((resolve) => {
    setTimeout(() => {
      const data = new Array(params.perPage).fill(null).map((_, index) => ({
        id: index + 1,
        name: faker.company.companyName(),
        status:
          statuses[faker.datatype.number({ min: 0, max: statuses.length - 1 })],
        address: faker.address.city(),
        date_created: faker.date.recent(5),
      }));
      resolve({ data });
    }, 1500);
  });

export const _Default = () => (
  <DataTable columns={columns} fetchData={fetchData} />
);

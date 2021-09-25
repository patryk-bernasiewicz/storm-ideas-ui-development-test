import React from 'react';

import GlobalStyle from 'components/StyleProvider/StyleProvider';
import { defaultTheme } from 'utils/theme';
import DataTable, { TableParams } from 'components/DataTable/DataTable';
import Status from 'components/Status/Status';
import { EmptyCell } from 'components/DataTable/EmptyCell/EmptyCell';
import { StatusValue } from 'utils/types';
import { Column } from 'components/DataTable/types';

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
];

const fetchData = (params: TableParams) =>
  new Promise((resolve) => {
    setTimeout(() => {
      console.log('===== fetched data for table params: ', params);
      resolve({
        data: [
          { id: 1, name: 'Auditing Britain', status: StatusValue.Live },
          { id: 2, name: 'LinusTechTips', status: StatusValue.Draft },
          { id: 3, name: 'Srips' },
        ],
      });
    }, 1500);
  });

function App() {
  return (
    <div className="App">
      <GlobalStyle theme={defaultTheme}>
        <DataTable columns={columns} fetchData={fetchData} />
      </GlobalStyle>
    </div>
  );
}

export default App;

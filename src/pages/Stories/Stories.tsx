import React, { FC, useState } from 'react';

import Select, { SelectItem, SelectProps } from 'components/Select/Select';
import { Action } from 'components/DataTable/DataTable';
import { ReactComponent as DeleteIcon } from 'svg/delete.svg';
import { ReactComponent as EditIcon } from 'svg/edit.svg';

import { fetchStories, createColumns } from './config';
import { StoryModel } from './types';
import { StyledSearch, StyledTable } from './styled';
import { StatusValue } from 'utils/types';
import { Filters } from 'components/DataTable/types';

const Stories: FC = () => {
  const [searchText, setSearchText] = useState('');
  const [statusFilter, setStatusFilter] = useState<StatusValue | null>(null);

  const actions: Action[] = [
    {
      key: 'delete',
      title: 'Delete',
      onClick: (row: StoryModel) => {
        alert('Delete row ID: ' + row.id);
      },
      icon: DeleteIcon,
      iconOnly: true,
      outlined: true,
      kind: 'red',
    },
    {
      key: 'edit',
      title: 'Edit',
      onClick: (row: StoryModel) => {
        alert('Edit row ID: ' + row.id);
      },
      icon: EditIcon,
    },
  ];
  const columns = createColumns(actions);

  const handleStatusSelect = (item: SelectItem | null) => {
    const status = (item?.value as StatusValue) || null;
    setStatusFilter(status);
  };

  const statusOptions: SelectProps['items'] = [
    { label: 'All Statuses', value: '' },
    { label: StatusValue.Draft, value: StatusValue.Draft },
    { label: StatusValue.Live, value: StatusValue.Live },
    { label: StatusValue.Past, value: StatusValue.Past },
    { label: StatusValue.Scheduled, value: StatusValue.Scheduled },
  ];

  const activeFilters: Filters = {
    [columns[3].key]: [statusFilter as string],
  };

  return (
    <>
      <div>
        <StyledSearch label="Search Stories" onSearch={setSearchText} />
        <Select
          label="Filter by status"
          id="status-select"
          items={statusOptions}
          emptyText="All statuses"
          onChange={handleStatusSelect}
          initialSelectedItem={statusOptions[0]}
        />
      </div>
      <StyledTable
        rowKeyPrefix="stories"
        columns={columns}
        fetchData={fetchStories}
        searchText={searchText}
        filters={activeFilters}
      />
    </>
  );
};

export default Stories;

import React, { FC, useState } from 'react';

import { ReactComponent as DeleteIcon } from 'svg/delete.svg';
import { ReactComponent as EditIcon } from 'svg/edit.svg';
import { Action } from 'components/DataTable/DataTable';
import { fetchStories, createColumns } from './config';
import { StoryModel } from './types';
import { StyledSearch, StyledTable } from './styled';

const Stories: FC = () => {
  const [searchText, setSearchText] = useState('');

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

  return (
    <>
      <div>
        <StyledSearch label="Search Stories" onSearch={setSearchText} />
      </div>
      <StyledTable
        rowKeyPrefix="stories"
        columns={columns}
        fetchData={fetchStories}
        searchText={searchText}
      />
    </>
  );
};

export default Stories;

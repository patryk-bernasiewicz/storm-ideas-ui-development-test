import React, { FC, useCallback, useMemo, useState } from 'react';

import { SelectItem, SelectProps } from 'components/Select/Select';

import { fetchStories } from './config';
import {
  StoriesSearch,
  StoriesTable,
  MetaWrapper,
  Header,
  StatusSelect,
  StoriesConfig,
  CtaButton,
} from './styled';
import { StatusValue } from 'utils/types';
import { Filters, Meta } from 'components/DataTable/types';
import { createColumns } from './config';
import PageHeading from 'components/PageHeading/PageHeading';
import { ReactComponent as AddIcon } from 'svg/add.svg';

const columns = createColumns();

const Stories: FC = () => {
  const [searchText, setSearchText] = useState('');
  const [statusFilter, setStatusFilter] = useState<StatusValue | null>(null);
  const [meta, setMeta] = useState<Meta>();

  const activeFilters = useMemo<Filters>(() => {
    return {
      [columns[3].key]: [statusFilter as string],
    };
  }, [statusFilter]);

  const handleStatusSelect = useCallback(
    (item: SelectItem | null) => {
      const status = (item?.value as StatusValue) || null;
      setStatusFilter(status);
    },
    [setStatusFilter]
  );

  const statusOptions: SelectProps['items'] = [
    { label: 'All Statuses', value: '' },
    { label: StatusValue.Draft, value: StatusValue.Draft },
    { label: StatusValue.Live, value: StatusValue.Live },
    { label: StatusValue.Past, value: StatusValue.Past },
    { label: StatusValue.Scheduled, value: StatusValue.Scheduled },
  ];

  const handleMetaUpdate = useCallback(
    (meta: any) => {
      setMeta(meta);
    },
    [setMeta]
  );

  return (
    <>
      <Header>
        <PageHeading>Stories</PageHeading>
        <StoriesConfig>
          <StoriesSearch label="Search Stories" onSearch={setSearchText} />
          <StatusSelect
            label="Filter by status"
            id="status-select"
            items={statusOptions}
            emptyText="All statuses"
            onChange={handleStatusSelect}
            initialSelectedItem={statusOptions[0]}
          />
          {meta && (
            <MetaWrapper>
              Showing {meta.start} to {meta.end} of {meta.totalItems}
            </MetaWrapper>
          )}
        </StoriesConfig>
        <CtaButton type="button">
          <AddIcon />
          Add story
        </CtaButton>
      </Header>
      <StoriesTable
        rowKeyPrefix="stories"
        columns={columns}
        fetchData={fetchStories}
        searchText={searchText}
        filters={activeFilters}
        onMetaUpdate={handleMetaUpdate}
      />
    </>
  );
};

export default Stories;

import { Action } from 'components/DataTable/types';

import { DateCell, TableParams } from 'components/DataTable/DataTable';
import axios from 'utils/axiosInstance';
import { ENDPOINTS } from 'constants/endpoints';
import { getEndpoint } from 'utils/api';
import { Actions } from 'components/DataTable/Actions/Actions';
import { StatusValue } from 'utils/types';
import Status from 'components/Status/Status';
import { PagesCell } from './PagesCell/PagesCell';
import { StoryModel } from './types';
import { TitleCell } from './TitleCell/TitleCell';

import { ReactComponent as DeleteIcon } from 'svg/delete.svg';
import { ReactComponent as EditIcon } from 'svg/edit.svg';

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

export const createColumns = () => [
  {
    key: 'title',
    dataIndex: 'title',
    title: 'Title',
    render: (_: any, row: StoryModel) => <TitleCell row={row} />,
  },
  {
    key: 'pages',
    dataIndex: 'pages',
    title: 'Pages',
    render: (value: string[]) => <PagesCell value={value} />,
  },
  {
    key: 'lastModified',
    dataIndex: 'lastModified',
    title: 'Last Modified',
    render: (value: string) => <DateCell value={value} />,
  },
  {
    key: 'status',
    dataIndex: 'status',
    title: 'Status',
    render: (value: StatusValue) => <Status value={value} />,
  },
  {
    key: 'liveFrom',
    dataIndex: 'liveFrom',
    title: 'Live From',
    render: (value: string) => <DateCell value={value} />,
  },
  {
    key: 'ends',
    dataIndex: 'ends',
    title: 'Ends',
    render: (value: string) => <DateCell value={value} />,
  },
  {
    key: 'actions',
    dataIndex: 'actions',
    title: '',
    render: (_: any, row: any) => <Actions row={row} actions={actions} />,
  },
];

export const fetchStories = (params: TableParams) => {
  return axios.get(getEndpoint(ENDPOINTS.stories), { params });
};

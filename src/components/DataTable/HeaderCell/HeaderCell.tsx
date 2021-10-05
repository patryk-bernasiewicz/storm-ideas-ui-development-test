import React, { FC } from 'react';
import { CellType } from 'rc-table/lib/interface';

import { Column, SortDirection } from '../types';
import { StyledCell, SortButton, SortIndicator } from './styled';

interface HeaderCellProps extends CellType<Column> {
  onClick: () => void;
  sortDirection?: SortDirection;
  sortable?: boolean;
}

const ariaSort: Record<SortDirection, 'ascending' | 'descending'> = {
  ASC: 'ascending',
  DESC: 'descending',
};

export const HeaderCell: FC<HeaderCellProps> = ({
  children,
  sortable,
  sortDirection,
  onClick,
  ...props
}) => {
  if (sortable) {
    return (
      <StyledCell
        {...props}
        scope="col"
        role="columnheader"
        aria-sort={sortDirection ? ariaSort[sortDirection] : 'none'}
        sortDirection={sortDirection}
      >
        <SortButton
          type="button"
          onClick={onClick}
          aria-label="Change column sorting"
        >
          {children}
          {sortable && <SortIndicator sortDirection={sortDirection} />}
        </SortButton>
      </StyledCell>
    );
  }

  return (
    <StyledCell scope="col" role="columnheader" {...props}>
      {children}
    </StyledCell>
  );
};

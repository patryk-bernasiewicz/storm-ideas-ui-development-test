import React, { FC } from 'react';
import { format } from 'date-fns';

import { StyledDateCell } from './styled';
import { EmptyCell } from '../EmptyCell/EmptyCell';

interface DateCellProps {
  value?: string;
}

export const DateCell: FC<DateCellProps> = ({ value }) => {
  if (!value) {
    return <EmptyCell />;
  }

  const displayYear =
    new Date(value).getFullYear() !== new Date().getFullYear();
  const dateFormat = displayYear ? 'LLL dd yyyy' : 'LLL dd, K:mm a';

  return <StyledDateCell>{format(new Date(value), dateFormat)}</StyledDateCell>;
};

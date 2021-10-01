import React, { FC } from 'react';
import { format } from 'date-fns';

import { TitleWrapper, StoryLink, PublishDate } from './styled';
import { StoryModel } from '../types';

interface TitleCellProps {
  row: StoryModel;
}

export const TitleCell: FC<TitleCellProps> = ({ row }) => {
  return (
    <TitleWrapper>
      <StoryLink href="#">{row.title}</StoryLink>
      <PublishDate>
        {row.liveFrom
          ? format(new Date(row.liveFrom), 'LLLL dd')
          : 'No publish date set'}
      </PublishDate>
    </TitleWrapper>
  );
};

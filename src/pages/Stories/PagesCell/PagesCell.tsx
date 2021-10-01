import React, { FC } from 'react';

import { StyledPage, LastPage, Wrapper } from './styled';

const MAX_DISPLAYED = 6;

export const PagesCell: FC<{ value: string[] }> = ({ value: pages }) => {
  const displayedPages =
    pages.length < MAX_DISPLAYED ? pages : pages.slice(0, MAX_DISPLAYED - 1);
  const more = pages.length - displayedPages.length;

  return (
    <Wrapper>
      {displayedPages.map((page, index) => (
        <StyledPage key={index} src={page} />
      ))}
      {more > 0 && <LastPage amount={more} />}
    </Wrapper>
  );
};

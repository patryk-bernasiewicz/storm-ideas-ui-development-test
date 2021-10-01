import styled, { css } from 'styled-components';

import Search from 'components/Search/Search';
import DataTable from 'components/DataTable/DataTable';

export const StyledSearch = styled(Search)`
  width: 100%;
  max-width: 378px;
`;

export const StyledTable = styled(DataTable)`
  .rc-table-cell:first-child {
    min-width: 162px;
  }

  ${({
    theme: {
      breakpoints,
      layout: { contentPadding },
    },
  }) => css`
    margin-left: -${contentPadding.mobile.x}px;
    margin-right: -${contentPadding.mobile.x}px;
    width: calc(100% + ${contentPadding.mobile.x * 2}px);

    .rc-table-cell:first-child {
      padding-left: ${contentPadding.mobile.x}px;
    }

    @media (${breakpoints.desktop}) {
      margin-left: -${contentPadding.desktop.x}px;
      margin-right: -${contentPadding.desktop.x}px;
      width: calc(100% + ${contentPadding.desktop.x * 2}px);

      .rc-table-cell:first-child {
        padding-left: ${contentPadding.desktop.x}px;
      }
    }
  `}
`;

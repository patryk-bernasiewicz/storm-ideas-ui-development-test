import styled, { css } from 'styled-components';

import Search from 'components/Search/Search';
import DataTable from 'components/DataTable/DataTable';
import Select from 'components/Select/Select';

export const StoriesSearch = styled(Search)`
  ${({ theme: { breakpoints } }) => css`
    width: 50%;
    flex: 1;

    @media (${breakpoints.tablet}) {
      max-width: 378px;
      width: auto;
      min-width: 140px;
    }
  `}
`;

export const StatusSelect = styled(Select)`
  margin-left: ${({ theme }) => theme.layout.contentPadding.mobile.x}px;
  max-width: 165px;

  ${({ theme: { breakpoints } }) => css`
    width: 50%;

    @media (${breakpoints.tablet}) {
      margin-left: ${({ theme }) => theme.layout.contentPadding.tablet.x}px;
      width: auto;
    }
  `}
`;

export const StoriesTable = styled(DataTable)`
  .rc-table-cell:first-of-type {
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

    .rc-table-cell:first-of-type {
      padding-left: ${contentPadding.mobile.x}px;
    }

    .rc-table-cell:last-of-type {
      padding-right: ${contentPadding.mobile.x}px;
    }

    @media (${breakpoints.tablet}) {
      margin-left: -${contentPadding.tablet.x}px;
      margin-right: -${contentPadding.tablet.x}px;
      width: calc(100% + ${contentPadding.tablet.x * 2}px);

      .rc-table-cell:first-of-type {
        padding-left: ${contentPadding.tablet.x}px;
      }

      .rc-table-cell:last-of-type {
        padding-right: ${contentPadding.tablet.x}px;
      }
    }
  `}
`;

export const MetaWrapper = styled.div`
  display: none;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSizes.small};
  line-height: 20px;
  letter-spacing: -0.01em;

  ${({ theme: { breakpoints, layout } }) => css`
    @media (${breakpoints.tablet}) {
      display: flex;
      margin-left: ${layout.contentPadding.tablet.x}px;
    }
  `}
`;

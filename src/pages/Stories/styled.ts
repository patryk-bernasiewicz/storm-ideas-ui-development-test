import styled, { css } from 'styled-components';

import Search from 'components/Search/Search';
import DataTable from 'components/DataTable/DataTable';
import Select from 'components/Select/Select';

export const Header = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin: 16px 0;

  ${({ theme: { breakpoints, layout } }) => css`
    @media (${breakpoints.desktop}) {
      > * {
        width: calc(50% - ${layout.contentPadding.desktop.x}px);
      }
    }
  `}
`;

export const StoriesSearch = styled(Search)`
  ${({ theme: { breakpoints, layout } }) => css`
    width: calc(50% - ${layout.contentPadding.mobile.x}px);

    @media (${breakpoints.desktop}) {
      max-width: 378px;
      width: auto;
      min-width: 80px;
    }
  `}
`;

export const StatusSelect = styled(Select)`
  margin-left: ${({ theme }) => theme.layout.contentPadding.mobile.x}px;

  ${({ theme: { breakpoints, layout } }) => css`
    width: calc(50% - ${layout.contentPadding.mobile.x}px);

    @media (${breakpoints.desktop}) {
      margin-left: ${({ theme }) => theme.layout.contentPadding.desktop.x}px;
      width: auto;
    }
  `}
`;

export const StoriesTable = styled(DataTable)`
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

export const MetaWrapper = styled.div`
  display: none;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSizes.small};
  line-height: 20px;
  letter-spacing: -0.01em;

  ${({ theme: { breakpoints, layout } }) => css`
    @media (${breakpoints.desktop}) {
      display: flex;
      margin-left: ${layout.contentPadding.desktop.x}px;
    }
  `}
`;

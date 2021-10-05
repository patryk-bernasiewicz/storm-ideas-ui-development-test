import styled, { css } from 'styled-components';

import { ReactComponent as SortIndicatorIcon } from 'svg/sort-indicator.svg';
import { SortDirection } from '../types';

export const StyledCell = styled.th<{
  sortDirection?: SortDirection | undefined;
}>`
  color: ${({ theme }) => theme.palette.gray200};
  font-size: ${({ theme }) => theme.fontSizes.small};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  background: none;
  border-bottom: 1px solid ${({ theme }) => theme.palette.steelBlue};
  padding: 9px 16px;
  text-align: left;

  ${({ theme, sortDirection }) =>
    Boolean(sortDirection) &&
    css`
      color: ${theme.palette.gray500};
    `}
`;

export const SortButton = styled.button`
  border: 0;
  background: 0;
  color: inherit;
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  font-family: inherit;
  font-size: inherit;
  font-weight: inherit;
  white-space: nowrap;
`;

export const SortIndicator = styled(SortIndicatorIcon)<{
  sortDirection: SortDirection | undefined;
}>`
  width: 20px;
  margin-left: 4px;

  > path {
    fill: transparent;
  }

  tr:hover & > path {
    fill: ${({ theme }) => theme.palette.gray70};
  }

  ${({ theme, sortDirection }) =>
    sortDirection === 'ASC' &&
    css`
      && > .asc {
        fill: ${theme.palette.gray500};
      }
    `}

  ${({ theme, sortDirection }) =>
    sortDirection === 'DESC' &&
    css`
      && > .desc {
        fill: ${theme.palette.gray500};
      }
    `}
`;

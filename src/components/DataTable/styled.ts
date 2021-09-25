import styled, { css } from 'styled-components';
import Table from 'rc-table';

export const StyledTable = styled(Table)<{ isLoading?: boolean }>`
  table {
    border-spacing: 0;
    border-collapse: separate;
    width: 100%;
  }

  .rc-table-cell {
    margin: 0;

    :first-of-type {
      padding-left: 30px;
    }

    :last-of-type {
      padding-right: 30px;
    }
  }

  .rc-table-thead {
    .rc-table-cell {
      color: ${({ theme }) => theme.palette.gray200};
      font-size: ${({ theme }) => theme.fontSizes.small};
      font-weight: ${({ theme }) => theme.fontWeight.bold};
      background: none;
      border-bottom: 1px solid ${({ theme }) => theme.palette.steelBlue};
      padding: 9px 16px;
      text-align: left;
    }
  }

  .rc-table-tbody {
    .rc-table-cell {
      color: ${({ theme }) => theme.palette.gray400};
      font-size: ${({ theme }) => theme.fontSizes.small};
      padding: 16px;
    }

    .rc-table-row:nth-child(2n + 1) {
      background: ${({ theme }) => theme.palette.white};
    }
    .rc-table-row:nth-child(2n + 2) {
      background: ${({ theme }) => theme.palette.gray50};
    }
  }

  ${({ isLoading }) =>
    isLoading &&
    css`
      opacity: 0.5;
      pointer-events: none;
    `}
`;

import styled, { css } from 'styled-components';
import Table from 'rc-table';

export const StyledTable = styled(Table)<{ isLoading?: boolean }>`
  table {
    border-spacing: 0;
    border-collapse: separate;
    width: 100%;
  }

  .rc-table-container {
    overflow: hidden;
    width: 100%;
  }

  .rc-table-content {
    overflow-x: auto;
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

  .rc-table-tbody {
    .rc-table-cell {
      color: ${({ theme }) => theme.palette.gray500};
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

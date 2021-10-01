import React, { FC, ChangeEvent } from 'react';

import { TableParams } from '../DataTable';
import { PER_PAGE } from '../config';

import { Footer, Input, Select, NextButton, PreviousButton } from './styled';

import { ReactComponent as LeftArrowIcon } from 'svg/long-arrow-left.svg';
import { ReactComponent as RightArrowIcon } from 'svg/long-arrow-right.svg';

interface TableFooterProps {
  onPageChange: (page: number) => void;
  onPerPageChange: (perPage: number) => void;
  pagination: TableParams;
  totalPages: number;
}

export const TableFooter: FC<TableFooterProps> = ({
  onPageChange,
  onPerPageChange,
  pagination,
  totalPages,
}) => {
  const { currentPage } = pagination;

  const handlePageInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value);
    if (value) {
      const normalizedValue = Math.max(0, Math.min(value, totalPages));
      onPerPageChange(normalizedValue);
    }
  };

  const handlePerPageChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const value = Number(event.target.value);
    if (value && PER_PAGE.includes(value)) {
      onPerPageChange(value);
    }
  };

  const handleNextPage = () => {
    if (pagination.currentPage >= totalPages) {
      return;
    }
    onPageChange(pagination.currentPage + 1);
  };

  const handlePrevPage = () => {
    if (pagination.currentPage <= 1) {
      return;
    }
    onPageChange(pagination.currentPage - 1);
  };

  return (
    <Footer>
      Page
      <Input
        type="text"
        inputMode="numeric"
        value={pagination.currentPage}
        onChange={handlePageInputChange}
      />
      of {totalPages}
      <Select onChange={handlePerPageChange}>
        {PER_PAGE.map((value) => (
          <option key={value} value={value}>
            {value} Rows
          </option>
        ))}
      </Select>
      <PreviousButton
        disabled={currentPage <= 1}
        type="button"
        onClick={handlePrevPage}
      >
        <LeftArrowIcon />
      </PreviousButton>
      <NextButton
        disabled={currentPage >= totalPages}
        type="button"
        onClick={handleNextPage}
      >
        <RightArrowIcon />
      </NextButton>
    </Footer>
  );
};

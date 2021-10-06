import React, { FC, ChangeEvent } from 'react';

import { TableParams } from '../DataTable';
import { PER_PAGE } from '../config';

import {
  Footer,
  InfoWrapper,
  Input,
  Select,
  NextButton,
  PreviousButton,
  ButtonsWrapper,
  SelectWrapper,
} from './styled';

import { ReactComponent as LeftArrowIcon } from 'svg/long-arrow-left.svg';
import { ReactComponent as RightArrowIcon } from 'svg/long-arrow-right.svg';
import { ReactComponent as SelectIcon } from 'svg/select.svg';

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
      <InfoWrapper>
        Page
        <Input
          type="text"
          inputMode="numeric"
          value={pagination.currentPage}
          onChange={handlePageInputChange}
        />
        of {totalPages}
      </InfoWrapper>
      <SelectWrapper>
        <Select onChange={handlePerPageChange}>
          {PER_PAGE.map((value) => (
            <option key={value} value={value}>
              {value} Rows
            </option>
          ))}
        </Select>
        <SelectIcon />
      </SelectWrapper>
      <ButtonsWrapper>
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
      </ButtonsWrapper>
    </Footer>
  );
};

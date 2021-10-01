import React, { ChangeEvent, FC, FormEvent, useRef } from 'react';

import { ReactComponent as SearchIcon } from 'svg/search.svg';
import { StyledButton, StyledForm, StyledInput } from './styled';

export interface SearchProps {
  className?: string;
  label: string;
  onSearch: (searchText: string) => void;
  debounceTime?: number;
}

const Search: FC<SearchProps> = ({
  className,
  label,
  onSearch,
  debounceTime = 500,
}) => {
  const debounceTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleSearch = (searchText: string) => {
    if (debounceTimer.current) {
      clearTimeout(debounceTimer.current);
    }
    debounceTimer.current = setTimeout(() => {
      onSearch(searchText);
    }, debounceTime);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    handleSearch(value);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const searchField = form.elements.namedItem('search') as HTMLInputElement;

    handleSearch(searchField.value);
  };

  return (
    <StyledForm className={className} onSubmit={handleSubmit}>
      <StyledInput
        aria-label={label}
        name="search"
        type="search"
        onChange={handleChange}
        placeholder="Search..."
      />
      <StyledButton aria-label="Search">
        <SearchIcon />
      </StyledButton>
    </StyledForm>
  );
};

export default Search;

import { ElementType, ReactNode } from 'react';
import { FixedType } from 'rc-table/lib/interface';

export interface Column {
  key: string;
  dataIndex: string;
  title: string;
  render?: (value: any, row: any) => ReactNode;
  fixed?: FixedType;
  width?: number;
  sortable?: boolean;
  align?: 'left' | 'right' | 'center';
}

export interface Row<T> {
  [key: string]: T;
}

export type Filters = Record<string, string[]>;

export interface TableParams {
  currentPage: number;
  perPage: number;
  search?: string;
  filters?: Filters;
  sorting?: Sorting;
}

export interface Action {
  key: string;
  title: string;
  kind?: 'default' | 'red';
  icon?: ElementType;
  iconOnly?: boolean;
  onClick: (row: any) => void;
  outlined?: boolean;
}

export interface Meta {
  currentPage: number;
  perPage: number;
  totalItems: number;
  totalPages: number;
  start: number;
  end: number;
}

export type SortDirection = 'ASC' | 'DESC';

export interface Sorting {
  column: string;
  direction: SortDirection;
}

import { ElementType, ReactNode } from 'react';
import { FixedType } from 'rc-table/lib/interface';

export interface Column {
  key: string;
  dataIndex: string;
  title: string;
  render?: (value: any, row: any) => ReactNode;
  fixed?: FixedType;
  width?: number;
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

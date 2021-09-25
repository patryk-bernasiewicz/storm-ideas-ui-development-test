import { FixedType } from 'rc-table/lib/interface';
import { ReactNode } from 'react';

export interface Column {
  key: string;
  dataIndex: string;
  title: string;
  render?: (value: any) => ReactNode;
  fixed?: FixedType;
  width?: number;
}

export interface Row<T> {
  [key: string]: T;
}

import React, { FC } from 'react';

import Downshift, { DownshiftProps } from 'downshift';
import {
  SelectWrapper,
  Label,
  Input,
  Button,
  List,
  Option,
  SelectIcon,
} from './styled';

export interface SelectItem {
  label: string;
  value: string;
}

export type SelectProps = DownshiftProps<SelectItem> & {
  className?: string;
  id: string;
  label: string;
  emptyText: string;
  items: SelectItem[];
};

const Select: FC<SelectProps> = ({
  className,
  id,
  label,
  emptyText,
  items,
  ...props
}) => {
  return (
    <Downshift {...props} itemToString={(item) => (item && item.label) || ''}>
      {({
        getInputProps,
        getItemProps,
        getLabelProps,
        getMenuProps,
        getToggleButtonProps,
        isOpen,
        highlightedIndex,
        getRootProps,
      }) => (
        <SelectWrapper
          className={className}
          {...getRootProps({ refKey: id }, { suppressRefError: true })}
          {...getToggleButtonProps().onClick}
        >
          <Label {...getLabelProps()}>{label}</Label>
          <Input {...getInputProps()} />
          <Button {...getToggleButtonProps()} aria-label={'toggle menu'}>
            <SelectIcon />
          </Button>
          <List {...getMenuProps()}>
            {isOpen
              ? items.map((item, index) => (
                  <Option
                    {...getItemProps({ item })}
                    key={item.label}
                    highlighted={index === highlightedIndex}
                  >
                    {item.label || emptyText}
                  </Option>
                ))
              : null}
          </List>
        </SelectWrapper>
      )}
    </Downshift>
  );
};

export default Select;

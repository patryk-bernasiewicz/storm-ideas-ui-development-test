import { Story, Meta } from '@storybook/react';

import Select, { SelectProps } from './Select';

export default {
  title: 'Components/Select',
  component: Select,
  argTypes: {
    onChange: {
      action: 'selection',
      table: { disable: true },
    },
    items: { table: { disable: true } },
  },
} as Meta;

type Args = SelectProps & {
  onChange: (item: SelectProps['items']) => void;
};

export const _Default: Story<Args> = (args) => <Select {...args} />;

_Default.args = {
  id: 'select',
  items: [
    { label: 'Option A', value: 'a' },
    { label: 'Option B', value: 'b' },
  ],
  label: 'Status',
};

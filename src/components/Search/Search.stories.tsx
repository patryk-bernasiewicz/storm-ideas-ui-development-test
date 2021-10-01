import { Story, Meta } from '@storybook/react';

import Search, { SearchProps } from './Search';

export default {
  title: 'Components/Search',
  component: Search,
  argTypes: {
    onSearch: {
      action: 'searched',
      table: { disable: true },
    },
  },
} as Meta;

type Args = SearchProps & {
  onSearch: (value: string) => void;
};

export const _Default: Story<Args> = (args) => <Search {...args} />;

_Default.args = {
  label: 'Search story',
  debounceTime: 500,
};

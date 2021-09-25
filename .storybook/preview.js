import StyleProvider from '../src/components/StyleProvider/StyleProvider';
import { defaultTheme } from '../src/utils/theme';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => (
    <StyleProvider theme={defaultTheme}>
      <Story />
    </StyleProvider>
  ),
];

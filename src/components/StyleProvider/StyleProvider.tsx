import React, { FC, ReactNode } from 'react';
import {
  createGlobalStyle,
  DefaultTheme,
  ThemeProvider,
} from 'styled-components';
import { Normalize } from 'styled-normalize';

const GlobalStyling = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap');

  html {
    box-sizing: border-box;
  }

  html * {
    box-sizing: inherit;
  }

  html,
  body,
  #root {
    width: 100%;
    height: 100%;
  }

  body {
    font-family: Inter, sans-serif;
  }
`;

interface StyleProviderProps {
  children: ReactNode;
  theme: DefaultTheme;
}

const StyleProvider: FC<StyleProviderProps> = ({ children, theme }) => (
  <>
    <Normalize />
    <GlobalStyling />
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  </>
);

export default StyleProvider;

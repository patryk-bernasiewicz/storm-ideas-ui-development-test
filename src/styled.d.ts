import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string;
    palette: {
      white: string;

      green100: string;
      green200: string;

      red: string;
      steelBlue: string;

      blue50: string;
      blue100: string;
      blue200: string;
      blue500: string;

      gray50: string;
      gray70: string;
      gray100: string;
      gray200: string;
      gray300: string;
      gray400: string;
      gray500: string;
      gray600: string;
      gray700: string;
      gray800: string;
    };
    fontSizes: {
      heading: string;
      default: string;
      small: string;
      smaller: string;
      tiny: string;
    };
    fontWeight: {
      light: number;
      default: number;
      medium: number;
      bold: number;
    };
    layout: {
      sidebarWidth: number;
      contentPadding: {
        mobile: { x: number; y: number };
        tablet: { x: number; y: number };
      };
    };
    breakpoints: {
      tablet: string;
      desktop: string;
    };
    transition: {
      default: string;
    };
  }
}

import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string;
    palette: {
      white: string;
      green: string;
      red: string;
      steelBlue: string;

      blue100: string;
      blue200: string;

      gray50: string;
      gray70: string;
      gray100: string;
      gray200: string;
      gray300: string;
      gray400: string;
      gray800: string;
    };
    fontSizes: {
      default: string;
      small: string;
      smaller: string;
      tiny: string;
    };
    fontWeight: {
      light: number;
      default: number;
      bold: number;
    };
  }
}

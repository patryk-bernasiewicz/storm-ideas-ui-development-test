import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string;
    palette: {
      white: string;
      blue: string;
      green: string;
      red: string;
      steelBlue: string;

      gray50: string;
      gray70: string;
      gray100: string;
      gray200: string;
      gray300: string;
      gray400: string;
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

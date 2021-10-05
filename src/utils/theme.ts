import { DefaultTheme } from 'styled-components';

export const defaultTheme: DefaultTheme = {
  borderRadius: '3px',
  palette: {
    white: '#FFFFFF',
    blue50: '#58C1DB',
    blue100: '#38A0B9',
    blue200: '#154E6E',
    blue500: '#008099',

    green100: '#5BA462',
    green200: '#49834E',

    red: '#D97059',
    steelBlue: '#DFE8EC',

    gray50: '#F9F9F9',
    gray70: '#EBEBEB',
    gray100: '#A3A3A3',
    gray200: '#7C7C7C',
    gray300: '#4D4D4D',
    gray400: '#484848',
    gray500: '#444647',
    gray600: '#38373F',
    gray700: '#2E2D34',
    gray800: '#232329',
  },
  fontSizes: {
    heading: '30px',
    default: '16px',
    small: '14px',
    smaller: '12px',
    tiny: '11px',
  },
  fontWeight: {
    default: 400,
    medium: 500,
    bold: 600,
    light: 300,
  },
  layout: {
    sidebarWidth: 228,
    contentPadding: {
      mobile: { x: 16, y: 20 },
      tablet: { x: 30, y: 24 },
    },
  },
  breakpoints: {
    tablet: 'min-width: 768px',
    desktop: 'min-width: 1200px',
  },
};

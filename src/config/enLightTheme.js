import { createTheme } from '@mui/material/styles';
import Raleway from '../fonts/english/Raleway.ttf';

const enlightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      dark: '#007bb7',
      main: '#0faaea',
      light: '#67dcff',
      contrastText: '#fafafa',
    },
    secondary: {
      dark: '#19d2c2',
      main: '#22e3ae',
      light: '#2af598',
      contrastText: '#fafafa',
    },
    text: {
      primary: 'rgba(0, 0, 0, 0.87)',
      secondary: 'rgba(0, 0, 0, 0.6)',
      disabled: 'rgba(0, 0, 0, 0.38)',
    },
    action: {
      active: 'rgba(0, 0, 0, 0.54)',
      hover: 'rgba(0, 0, 0, 0.04)',
      selected: 'rgba(0, 0, 0, 0.08)',
      disabled: 'rgba(0, 0, 0, 0.26)',
      disabledBackground: 'rgba(0, 0, 0, 0.12)',
    },
    Background: {
      default: '#f6f6f6 ',
      paper: '##D8E7EF',
    },
    divider: 'rgba(0, 0, 0, 0.12)',
  },
  direction: 'ltr',
  typography: {
    htmlFontSize: 16,
    fontFamily: 'Raleway',
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightMedium: 500,
    fontWeightRegular: 400,
    fontWeightBold: 700,
    h1: {
      fontWeight: '700',
      fontSize: '2.4rem',
      lineHeight: 1.3,
    },
    h2: {
      fontWeight: '700',
      fontSize: '2.2rem',
      lineHeight: 1.3,
    },
    h3: {
      fontWeight: '700',
      fontSize: '2rem',
      lineHeight: 1.3,
    },
    h4: {
      fontWeight: '600',
      fontSize: '1.8rem',
      lineHeight: 1.3,
    },
    h5: {
      fontWeight: '600',
      fontSize: '1.6rem',
      lineHeight: 1.3,
    },
    h6: {
      fontWeight: '500',
      fontSize: '1.4rem',
      lineHeight: 1.3,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
      @font-face {
        font-family: 'Raleway';
        font-style: normal;
        font-display: swap;
        font-weight: 400;
        src: local('Raleway'), local('Raleway-Regular'), url(${Raleway}) format('ttf');
        unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
      }
    `,
    },
  },
});

export default enlightTheme;

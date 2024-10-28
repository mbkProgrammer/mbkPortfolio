import { createTheme } from '@mui/material/styles';
import Raleway from '../fonts/english/Raleway.ttf';

const enDarkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      dark: 'hsl(217.2 91.2% 59.8%)',
      main: 'hsl(217.2 91.2% 59.8%)',
      light: 'hsl(217.2 91.2% 59.8%)',
      contrastText: 'hsl(222.2 47.4% 11.2%)',
    },
    secondary: {
      dark: 'hsl(217.2 32.6% 17.5%)',
      main: 'hsl(217.2 32.6% 17.5%)',
      light: 'hsl(217.2 32.6% 17.5%)',
      contrastText: 'hsl(210 40% 98%)',
    },
    text: {
      primary: 'hsl(210 40% 98%)',
      secondary: 'hsl(210 40% 98%)',
      disabled: 'hsl(217.2 32.6% 17.5%)',
    },
    action: {
      active: '#fff',
      hover: 'rgba(255, 255, 255, 0.08)',
      selected: 'rgba(255, 255, 255, 0.16)',
      disabled: 'hsl(215 20.2% 65.1%)',
      disabledBackground: 'hsl(217.2 32.6% 17.5%)',
    },
    Background: {
      default: 'hsl(222.2 84% 4.9%)',
      paper: 'hsl(222.2 84% 4.9%)',
    },
    divider: 'rgba(255, 255, 255, 0.12)',
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

export default enDarkTheme;

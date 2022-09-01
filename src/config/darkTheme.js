import { createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      light: '#7293ff',
      main: '#2566f8',
      dark: '#003dc4',
      contrastText: '#fff',
    },
    secondary: {
      light: '#a1ffe0',
      main: '#6af7ae',
      dark: '#2ac37e',
      contrastText: '#fff',
    },
    text: {
      primary: '#fff',
      secondary: 'rgba(255, 255, 255, 0.7)',
      disabled: 'rgba(255, 255, 255, 0.5)',
    },
    action: {
      active: '#fff',
      hover: 'rgba(255, 255, 255, 0.08)',
      selected: 'rgba(255, 255, 255, 0.16)',
      disabled: 'rgba(255, 255, 255, 0.3)',
      disabledBackground: 'rgba(255, 255, 255, 0.12)',
    },
    Background: {
      default: '#1d2027',
      paper: '#1d2027',
    },
    divider: 'rgba(255, 255, 255, 0.12)',
  },
  typography: {
    htmlFontSize: 16,
    fontFamily: '"Noto Sans", sans-serif',
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
});

export default darkTheme;

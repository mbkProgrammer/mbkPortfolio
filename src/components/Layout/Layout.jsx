import React from 'react';
import { Box } from '@mui/material';
import { Footer, Header } from '..';

const Layout = ({ children, setDarkMode, darkMode }) => (
  <Box bgcolor="Background.default" maxWidth="100vw" minHeight="100vh" textAlign="center">
    <Header setDarkMode={setDarkMode} darkMode={darkMode} />
    <Box maxWidth="95vw" mx="auto" pt="45px">
      {children}
    </Box>
    <Footer />
  </Box>
);

export default Layout;

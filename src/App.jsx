import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import {
  Layout, About, Contact, Home, Portfolio,
} from './components';
import darkTheme from './config/darkTheme';
import lightTheme from './config/lightTheme';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [updateDarkMode, setUpdateDarkMode] = useState(false);

  const [online, setOnline] = useState(true);
  useEffect(() => {
    navigator.serviceWorker
      .register('./sw.js')
      .then((registration) => {
        console.log('SW registered: ', registration);
      });
  }, []);
  const handleOnline = () => {
    setOnline(navigator.onLine);
  };
  useEffect(() => {
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOnline);
  });

  useEffect(() => {
    console.log('online :>> ', online);
  }, [online]);

  useEffect(() => {
    if (!updateDarkMode) {
      setUpdateDarkMode(true);
      return;
    }
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  useEffect(() => {
    const darkModeTmp = localStorage.getItem('darkMode');
    if (darkModeTmp === 'true') {
      setDarkMode(true);
    } else {
      setDarkMode(false);
    }
  }, []);
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <div className="App">
        <BrowserRouter>
          <Layout darkMode={darkMode} setDarkMode={setDarkMode}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/About" element={<About />} />
              <Route path="/Portfolio" element={<Portfolio />} />
              <Route path="/Contact" element={<Contact />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
};

export default App;

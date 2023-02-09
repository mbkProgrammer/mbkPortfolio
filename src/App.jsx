import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';
import {
  Layout, About, Contact, Home, Portfolio,
} from './components';
import enDarkTheme from './config/enDarkTheme';
import enLightTheme from './config/enLightTheme';
import faLightTheme from './config/faLightTheme';
import faDarkTheme from './config/faDarkTheme';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [updateDarkMode, setUpdateDarkMode] = useState(false);
  const [theme, setTheme] = useState(enDarkTheme);
  const { i18n } = useTranslation();

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
    if (darkMode) {
      if (i18n.language === 'fa-IR' || i18n.language === 'fa') {
        setTheme(faDarkTheme);
      } else {
        setTheme(enDarkTheme);
      }
    } else if (i18n.language === 'fa-IR' || i18n.language === 'fa') {
      setTheme(faLightTheme);
    } else {
      setTheme(enLightTheme);
    }
  }, [darkMode, i18n.language]);

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
    <div className="App" dir={i18n.language === 'en' ? 'ltr' : 'rtl'}>
      <ThemeProvider theme={theme}>
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
      </ThemeProvider>
    </div>
  );
};

export default App;

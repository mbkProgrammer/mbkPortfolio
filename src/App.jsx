import './App.css';
import React, { useState, useEffect, useLayoutEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';
import rtlPlugin from 'stylis-plugin-rtl';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { prefixer } from 'stylis';
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

  const cacheRtl = createCache({
    key: 'muirtl',
    stylisPlugins: [prefixer, rtlPlugin],
  });
  const cacheLtr = createCache({
    key: 'muirtl',
    stylisPlugins: [prefixer],
  });

  const [online, setOnline] = useState(true);
  // useEffect(() => {
  //   navigator.serviceWorker
  //     .register('./sw.js')
  //     .then((registration) => {
  //       console.log('SW registered: ', registration);
  //     });
  // }, []);
  // const handleOnline = () => {
  //   setOnline(navigator.onLine);
  // };

  // useEffect(() => {
  //   window.addEventListener('online', handleOnline);
  //   window.addEventListener('offline', handleOnline);
  // });

  useEffect(() => {
    // Start Clarity tracking
    if (window.clarity) {
      window.clarity('track', 'pageview');
    }

    // Clean up Clarity tracking when component unmounts
    return () => {
      if (window.clarity) {
        window.clarity('track', 'pageview', { keepalive: false });
      }
    };
  }, []);

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
  useLayoutEffect(() => {
    document.body.setAttribute('dir', i18n.language === 'en' ? 'ltr' : 'rtl');
  }, [i18n.language]);
  return (
    <div className="App" dir={i18n.language === 'en' ? 'ltr' : 'rtl'}>
      <CacheProvider value={i18n.language === 'en' ? cacheLtr : cacheRtl}>
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
      </CacheProvider>
    </div>
  );
};

export default App;

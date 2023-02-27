/* eslint-disable react/no-unescaped-entities */
import './Home.css';
import { Typography, Box, Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { Trans, useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation();
  return (
    <Box className="home">
      <img src="./assets/img/Home.png" alt="home" className="home--img" />
      <Box textAlign="center" className="home--content">
        <Typography variant="h2" color="text.primary" mb="5px" fontWeight="700" textAlign="start">
          <Trans components={{ br: <br /> }}>
            home.title.text1
          </Trans>
        </Typography>
        <Typography color="text.primary" variant="h3" textAlign="start">
          {t('home.title.text2')}
        </Typography>
        <Box display="flex" justifyContent="center" my="40px">
          <Link to="/About" style={{ textDecoration: 'none' }}>
            <Button variant="contained" sx={{ margin: '0 5px', textDecoration: 'none' }}>{t('home.buttons.about')}</Button>
          </Link>
          <Link to="/Portfolio" style={{ textDecoration: 'none' }}>
            <Button variant="outlined" sx={{ margin: '0 5px' }}>{t('home.buttons.portfolio')}</Button>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;

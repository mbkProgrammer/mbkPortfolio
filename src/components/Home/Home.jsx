/* eslint-disable react/no-unescaped-entities */
import './Home.css';
import { Typography, Box, Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <Box className="home">
    <img src="./assets/img/Home.png" alt="home" className="home--img" />
    <Box textAlign="center" className="home--content">
      <Typography variant="h2" color="text.primary" mb="5px" fontWeight="700" textAlign="start">
        Hay There👋
        <br />
        I'm Mohammad Baqer Kohie
      </Typography>
      <Typography color="text.primary" variant="h3" fontSize="16px" fontWeight="300" textAlign="start">
        I am developing the front of web.
      </Typography>
      <Box display="flex" justifyContent="center" my="40px">
        <Link to="/About">
          <Button variant="contained" sx={{ marginRight: '5px' }}>About me</Button>
        </Link>
        <Link to="/Portfolio">
          <Button variant="outlined" sx={{ marginLeft: '5px' }}>😮 Let’s see portfolios</Button>
        </Link>
      </Box>
    </Box>
  </Box>
);

export default Home;

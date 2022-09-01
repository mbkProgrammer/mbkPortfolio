import React from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import './Footer.css';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

const Footer = () => (
  <Box display="flex" justifyContent="space-between" mx="6px" mt="50px" borderTop="1px solid #fff" color="text.primary" className="Footer" alignItems="center">
    <Typography width="300px">Copyright © 2021 All rights reserved.</Typography>
    <Box display="flex" justifyContent="center" width="300px">
      <IconButton href="https://github.com/mbkprogrammer/" sx={{ color: 'text.primary' }}>
        <AiFillGithub />
      </IconButton>
      <IconButton href="https://www.instagram.com/mbkProgrammer/" sx={{ color: 'text.primary' }}>
        <AiFillInstagram />
      </IconButton>
      <IconButton href="https://www.linkedin.com/in/mohamad-baqer-kohie-869315212" sx={{ color: 'text.primary' }}>
        <AiFillLinkedin />
      </IconButton>
    </Box>
    <Typography width="300px">Develope by mbk</Typography>
  </Box>
);

export default Footer;

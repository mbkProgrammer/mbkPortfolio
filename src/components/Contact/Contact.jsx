import React from 'react';
import { Box, Typography } from '@mui/material';
import './Contact.css';

const Contact = () => (
  <Box textAlign="left" display="flex" alignItems="center">
    <img src="./assets/img/Contact.png" alt="contact" className="contact__img" />
    <Box mt="30px" color="secondary.light">
      <Typography variant="h3">
        You can reach me any time🙂
      </Typography>
      <Typography variant="body1" mt="20px" lineHeight="50px">
        Github: mbkprogrammer
        <br />
        Linkedin: 869315212
        <br />
        Telegram: mbkprogramer
        <br />
        Email: mbk2019.co@gmail.com
      </Typography>
    </Box>
  </Box>
);

export default Contact;

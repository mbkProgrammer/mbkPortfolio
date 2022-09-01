import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import React from 'react';
import { BiLinkExternal } from 'react-icons/bi';
import PORTFOLIO from './Portfolio.json';
import './Portfolio.css';

const Portfolio = () => (
  <Box
    display="flex"
    justifyContent="flex-start"
    alignItems="center"
    flexWrap="wrap"
    width="100%"
  >
    {PORTFOLIO.map((item) => (
      <Card
        sx={{
          backgroundColor: 'Background.paper',
          color: 'text.primary',
          margin: '23px 22px',
          borderRadius: '10px',
        }}
        className="portfolio__cards"
      >
        <CardMedia
          component="img"
          image={item.img}
          className="card__media"
        />
        <CardContent
          sx={{
            textAlign: 'left',
            position: 'relative',
            zIndex: '10',
          }}
        >
          <Typography variant="h5" textAlign="left">
            {item.tittle}
          </Typography>
          <Typography
            variant="body2"
            textAlign="left"
            mt="5px"
            mb="30px"
          >
            {item.caption}
          </Typography>
          <Button
            endIcon={<BiLinkExternal />}
            href={item.href}
            sx={{
              position: 'absolute',
              bottom: '10px',
              right: '10px',
            }}
          >
            See
          </Button>
        </CardContent>
      </Card>
    ))}
  </Box>
);

export default Portfolio;

/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import {
  Box, Card, Typography,
} from '@mui/material';
import { useTheme } from '@emotion/react';
import './About.css';
import {
  DiJavascript, DiReact, DiCss3, DiBootstrap,
} from 'react-icons/di';
import { AiFillHtml5 } from 'react-icons/ai';
import { MdApi, MdOutlineSettingsCell } from 'react-icons/md';
import {
  SiGraphql, SiNextdotjs, SiPwa, SiRedux,
} from 'react-icons/si';

const About = () => {
  const theme = useTheme();
  return (
    <Box>
      <section>
        <Box
          className="about--title"
          display="flex"
          justifyContent="center"
          alignItems="center"
          mb="10px"
        >
          <img src="./assets/img/saly-10.png" alt="saly" />
          <Typography
            variant="h3"
            color="text.primary"
            textAlign="left"
            mt="70px"
          >
            I'm Mohammad Baqer Kohie
            <br />
            <span style={{ color: `${theme.palette.primary.main}` }}>
              Frontend
            </span>
            {' '}
            Developer
          </Typography>
        </Box>
        <Typography
          variant="subtitle1"
          color="text.primary"
          style={{ textAlign: 'start', padding: '30px' }}
        >
          I'm Mohammad Baqer Kohie, programmer and frontend web developer. I
          will help you to make your website in the best way.
        </Typography>
      </section>
      <section className="skill__section">
        <Typography
          variant="h3"
          color="text.primary"
          style={{ textAlign: 'start' }}
        >
          Technologies for working
        </Typography>
        <Box sx={{ padding: '20px', display: 'flex', flexWrap: 'wrap' }}>
          <Card
            className="skill_card"
            sx={{
              borderColor: 'secondary.main',
              backgroundColor: '#e34c26',
              borderRadius: '16px',
              color: '#fff',
              animationDelay: '100ms',
            }}
          >
            <AiFillHtml5 fontSize="25px" />
            <Typography>HTML</Typography>
          </Card>
          <Card
            className="skill_card"
            sx={{
              borderColor: 'secondary.main',
              backgroundColor: '#264de4',
              borderRadius: '16px',
              color: '#fff',
              animationDelay: '150ms',
            }}
          >
            <DiCss3 fontSize="25px" />
            <Typography>CSS</Typography>
          </Card>
          <Card
            className="skill_card"
            sx={{
              borderColor: 'secondary.main',
              backgroundColor: '#F0DB4F',
              borderRadius: '16px',
              color: '#fff',
              animationDelay: '200ms',
            }}
          >
            <DiJavascript fontSize="25px" />
            <Typography>JavaScript</Typography>
          </Card>
          <Card
            className="skill_card"
            sx={{
              borderColor: 'secondary.main',
              backgroundColor: '#61DBFB',
              borderRadius: '16px',
              color: '#212121',
              animationDelay: '250ms',
            }}
          >
            <DiReact fontSize="25px" />
            <Typography>React</Typography>
          </Card>
          <Card
            className="skill_card"
            sx={{
              borderColor: 'secondary.main',
              backgroundColor: '#000',
              borderRadius: '16px',
              color: '#fff',
              animationDelay: '300ms',
            }}
          >
            <SiNextdotjs fontSize="25px" />
            <Typography>NextJS</Typography>
          </Card>
          <Card
            className="skill_card"
            sx={{
              borderColor: 'secondary.main',
              backgroundColor: '#999',
              borderRadius: '16px',
              color: '#fff',
              animationDelay: '350ms',
            }}
          >
            <MdOutlineSettingsCell fontSize="25px" />
            <Typography>Responsive</Typography>
          </Card>
          <Card
            className="skill_card"
            sx={{
              borderColor: 'secondary.main',
              backgroundColor: '#563d7c',
              borderRadius: '16px',
              color: '#fff',
              animationDelay: '400ms',
            }}
          >
            <DiBootstrap fontSize="25px" color="" />
            <Typography>Bootstrap</Typography>
          </Card>
          <Card
            className="skill_card"
            sx={{
              borderColor: 'secondary.main',
              backgroundColor: '#764abc',
              borderRadius: '16px',
              color: '#fff',
              animationDelay: '450ms',
            }}
          >
            <SiRedux fontSize="25px" />
            <Typography>Redux</Typography>
          </Card>
          <Card
            className="skill_card"
            sx={{
              borderColor: 'secondary.main',
              backgroundColor: '#323232',
              borderRadius: '16px',
              color: '#fff',
              animationDelay: '500ms',
            }}
          >
            <SiPwa fontSize="25px" />
            <Typography>PWA</Typography>
          </Card>
          <Card
            className="skill_card"
            sx={{
              borderColor: 'secondary.main',
              backgroundColor: '#91a4f1',
              borderRadius: '16px',
              color: '#fff',
              animationDelay: '550ms',
            }}
          >
            <MdApi fontSize="25px" />
            <Typography>RestApi</Typography>
          </Card>
          <Card
            className="skill_card"
            sx={{
              borderColor: 'secondary.main',
              backgroundColor: '#e535ab',
              borderRadius: '16px',
              color: '#fff',
              animationDelay: '600ms',
            }}
          >
            <SiGraphql fontSize="25px" />
            <Typography>GraphQl</Typography>
          </Card>
        </Box>
      </section>
    </Box>
  );
};

export default About;

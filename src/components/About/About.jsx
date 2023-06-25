/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import {
  Box, Card, Dialog, Typography,
} from '@mui/material';
import { useTheme } from '@emotion/react';
import './About.css';
import {
  DiJavascript, DiReact, DiCss3, DiBootstrap, DiNodejs,
} from 'react-icons/di';
import { AiFillHtml5 } from 'react-icons/ai';
import { MdApi, MdOutlineSettingsCell } from 'react-icons/md';
import {
  SiExpo,
  SiExpress,
  SiFastify,
  SiGraphql, SiMongodb, SiMysql, SiNextdotjs, SiPwa, SiRedux, SiRemix,
} from 'react-icons/si';
import { Trans, useTranslation } from 'react-i18next';
import { FaNodeJs } from 'react-icons/fa';
import { BiLogoPostgresql } from 'react-icons/bi';
import dataFa from '../../language/fa.json';

const About = () => {
  const { t } = useTranslation();
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
          <img src="./assets/img/Saly.png" alt="saly" />
          <Typography
            variant="h3"
            color="text.primary"
            textAlign="left"
            mt="70px"
          >
            <Trans components={{ span: <span style={{ color: `${theme.palette.primary.main}` }} /> }}>
              about.title
            </Trans>
          </Typography>
        </Box>
        <Typography
          variant="subtitle1"
          color="text.primary"
          style={{ textAlign: 'start', padding: '30px' }}
        >
          {t('about.desc')}
        </Typography>
        <Typography
          variant="h4"
          color="text.primary"
          textAlign="start"
          mt="20px"
        >
          {t('about.experianceTittle')}
        </Typography>
        <ul style={{ textAlign: 'start' }}>
          {
            dataFa.about.experiance.map((data) => (
              <Typography sx={{ listStyleType: 'revert-layer' }} color="text.primary" key={data.id}>{t(`about.experiance.${data.id}.text`, { returnObjects: true })}</Typography>
            ))
          }
        </ul>
      </section>
      <section className="skill__section">
        <Typography
          variant="h3"
          color="text.primary"
          style={{ textAlign: 'start' }}
        >
          {t('about.tecTitle')}
        </Typography>
        <Box sx={{
          padding: '20px', display: 'flex', flexWrap: 'wrap', direction: 'ltr',
        }}
        >
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
              backgroundColor: '#3c873a',
              borderRadius: '16px',
              color: '#fff',
              animationDelay: '200ms',
            }}
          >
            <FaNodeJs fontSize="25px" />
            <Typography>NodeJS</Typography>
          </Card>
          <Card
            className="skill_card"
            sx={{
              borderColor: 'secondary.main',
              backgroundColor: '#fafafa',
              borderRadius: '16px',
              color: '#212121',
              animationDelay: '200ms',
            }}
          >
            <SiExpress fontSize="25px" />
            <Typography>Express</Typography>
          </Card>
          <Card
            className="skill_card"
            sx={{
              borderColor: 'secondary.main',
              backgroundColor: '#fafafa',
              borderRadius: '16px',
              color: '#212121',
              animationDelay: '200ms',
            }}
          >
            <SiFastify fontSize="25px" />
            <Typography>Fastify</Typography>
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
              backgroundColor: '#61DBFB',
              borderRadius: '16px',
              color: '#212121',
              animationDelay: '250ms',
            }}
          >
            <DiReact fontSize="25px" />
            <Typography>React Native</Typography>
          </Card>
          <Card
            className="skill_card"
            sx={{
              borderColor: 'secondary.main',
              backgroundColor: '#fafafa',
              borderRadius: '16px',
              color: '#212121',
              animationDelay: '250ms',
            }}
          >
            <SiExpo fontSize="25px" />
            <Typography>Expo</Typography>
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
              backgroundColor: '#000',
              borderRadius: '16px',
              color: '#fff',
              animationDelay: '300ms',
            }}
          >
            <SiRemix fontSize="25px" />
            <Typography>Remix</Typography>
          </Card>
          <Card
            className="skill_card"
            sx={{
              borderColor: 'secondary.main',
              backgroundColor: '#0064a5',
              borderRadius: '16px',
              color: '#fff',
              animationDelay: '300ms',
            }}
          >
            <BiLogoPostgresql fontSize="25px" />
            <Typography>PostgreSQl</Typography>
          </Card>
          <Card
            className="skill_card"
            sx={{
              borderColor: 'secondary.main',
              backgroundColor: '#00758F',
              borderRadius: '16px',
              color: '#fff',
              animationDelay: '300ms',
            }}
          >
            <SiMysql fontSize="25px" />
            <Typography>MySql</Typography>
          </Card>
          <Card
            className="skill_card"
            sx={{
              borderColor: 'secondary.main',
              backgroundColor: '#4DB33D',
              borderRadius: '16px',
              color: '#fff',
              animationDelay: '300ms',
            }}
          >
            <SiMongodb fontSize="25px" />
            <Typography>MongoDB</Typography>
          </Card>
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

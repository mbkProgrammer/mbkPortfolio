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
import { useTranslation } from 'react-i18next';
import dataFa from '../../language/fa.json';
import './Portfolio.css';

const Portfolio = () => {
  const { i18n, t } = useTranslation();
  const data = dataFa.portfolio.item;
  return (
    <div>
      <Typography
        variant="h3"
        color="text.primary"
        textAlign="center"
        mt="30px"
        mb="10px"
      >
        {t('portfolio.tittle')}
      </Typography>
      <Box
        display="grid"
        width="100%"
        rowGap="12px"
        columnGap="16px"
        className="portfolio_container"
      >
        {data.map((item, i) => (
          <Card
            sx={{
              backgroundColor: 'Background.paper',
              color: 'text.primary',
              // margin: '23px 22px',
              borderRadius: '10px',
            }}
            // className="portfolio__cards"
            key={item.id}
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
              <Typography variant="h5" textAlign="start">
                {t(`portfolio.item.${i}.tittle`)}
              </Typography>
              <Typography variant="body2" textAlign="start" mt="5px" mb="30px">
                {t(`portfolio.item.${i}.description`)}
              </Typography>
              {i18n.language === 'en' ? (
                <Button
                  startIcon={<BiLinkExternal style={{ marginLeft: '10px' }} />}
                  href={item.link}
                  sx={{
                    position: 'absolute',
                    bottom: '10px',
                    right: '10px',
                  }}
                >
                  See
                </Button>
              ) : (
                <Button
                  startIcon={<BiLinkExternal style={{ marginLeft: '10px' }} />}
                  href={item.link}
                  sx={{
                    position: 'absolute',
                    bottom: '10px',
                    left: '10px',
                  }}
                >
                  دیدن
                </Button>
              )}
            </CardContent>
          </Card>
        ))}
      </Box>
    </div>
  );
};

export default Portfolio;

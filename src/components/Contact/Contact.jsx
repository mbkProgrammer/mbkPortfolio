import React from 'react';
import {
  Box, Link, Typography,
} from '@mui/material';
import './Contact.css';
import {
  BsDiscord, BsGithub, BsInstagram, BsLinkedin, BsWhatsapp,
} from 'react-icons/bs';
import { RiExternalLinkFill } from 'react-icons/ri';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation();
  return (
    <Box textAlign="left" display="flex" alignItems="center" flexWrap="wrap">
      <img src="./assets/img/Contact.png" alt="contact" className="contact__img" />
      <Box mt="30px" color="secondary.light" overflow="hidden">
        <Typography variant="h3">
          {t('contact.title')}
        </Typography>
        <Box sx={{
          marginTop: '30px', display: 'flex', flexDirection: 'column',
        }}
        >
          <Link href="https://github.com/mbkProgrammer/" color="text.primary" overflow="hidden" variant="h5" className="contact__link">
            <BsGithub className="contact__link__icon" />
            <span>
              {t('contact.github')}
            </span>
            <RiExternalLinkFill className="contact__link--action" />
          </Link>
          <Link href="https://www.linkedin.com/in/mohamad-baqer-kohie-869315212/" color="text.primary" overflow="hidden" variant="h5" className="contact__link">
            <BsLinkedin className="contact__link__icon" />
            <span>
              {t('contact.linkedin')}
            </span>
            <RiExternalLinkFill className="contact__link--action" />
          </Link>
          <Link href="https://discordapp.com/users/893214068297568267/" color="text.primary" overflow="hidden" variant="h5" className="contact__link">
            <BsDiscord className="contact__link__icon" />
            <span>
              {t('contact.discord')}
            </span>
            <RiExternalLinkFill className="contact__link--action" />
          </Link>
          <Link href="https://www.instagram.com/mbkProgrammer/" color="text.primary" overflow="hidden" variant="h5" className="contact__link">
            <BsInstagram className="contact__link__icon" />
            <span>
              {t('contact.instagram')}
            </span>
            <RiExternalLinkFill className="contact__link--action" />
          </Link>
          <Link href="https://wa.me/989916596573?" color="text.primary" overflow="hidden" variant="h5" className="contact__link">
            <BsWhatsapp className="contact__link__icon" />
            <span>
              {t('contact.whatsapp')}
            </span>
            <RiExternalLinkFill className="contact__link--action" />
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Contact;

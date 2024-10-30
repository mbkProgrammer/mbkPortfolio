import React, { useState } from 'react';
import {
  Alert,
  Box, Button, Collapse, FormControl, IconButton, Link, TextField, Typography,
} from '@mui/material';
import './Contact.css';
import {
  BsDiscord, BsFillTelephoneFill, BsGithub, BsInstagram, BsLinkedin, BsWhatsapp,
} from 'react-icons/bs';
import { RiExternalLinkFill } from 'react-icons/ri';
import { useTranslation } from 'react-i18next';
import emailjs from '@emailjs/browser';
import { LoadingButton } from '@mui/lab';
import { MdClose } from 'react-icons/md';

const Contact = () => {
  const [fullName, setFullName] = useState('');
  const [phoneNumberValue, setPhoneNumberValue] = useState('');
  const [loading, setLoading] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);

  const { t } = useTranslation();

  const sendContactInfo = async () => {
    setLoading(true);
    const res = await emailjs.send('service_r4tzm1x', 'template_ranph1r', {
      from_name: 'mbkProgrammer',
      to_name: 'mbk',
      name: fullName,
      phone: phoneNumberValue,
      user_email: 'mbk2019.co@gmail.com',
    }, 'QU2zogPs37f3NaigZ');
    setLoading(false);
    if (res.status === 200) {
      setOpenAlert(true);
      setFullName('');
      setPhoneNumberValue('');
    }
  };

  return (
    <Box>
      <Collapse in={openAlert}>
        <Alert
          action={(
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpenAlert(false);
              }}
            >
              <MdClose fontSize="inherit" />
            </IconButton>
          )}
          sx={{ mb: 2 }}
        >
          {t('contact.alertText')}
        </Alert>
      </Collapse>
      <Box textAlign="center" className="contact_container">
        <img src="./assets/img/Contact.png" alt="contact" className="contact__img" />
        <Box color="primary.light" className="contactForm">
          <Typography textAlign="center" variant="h4">
            {t('contact.formTitle')}
          </Typography>
          <FormControl fullWidth style={{ marginTop: '20px', position: 'relative' }}>
            <TextField
              required
              style={{
                margin: '10px auto', borderRadius: '16px', width: '90%',
              }}
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              id="fullName"
              label={t('contact.fullNameInput')}
              variant="outlined"
            />
            <TextField
              required
              style={{
                margin: '10px auto', borderRadius: '16px', width: '90%',
              }}
              value={phoneNumberValue}
              id="phoneNumber"
              label={t('contact.numberInput')}
              variant="outlined"
              onChange={(e) => setPhoneNumberValue(e.target.value)}
            />
            <LoadingButton
              loading={loading}
              size="large"
              variant="contained"
              color="primary"
              style={{
                margin: '20px auto', borderRadius: '16px', width: '90%',
              }}
              onClick={sendContactInfo}
            >
              {t('contact.formSubmit')}
            </LoadingButton>
          </FormControl>
        </Box>
        <Box mt="30px" textAlign="start" color="primary.light" overflow="hidden">
          <Typography variant="h3">
            {t('contact.title')}
          </Typography>
          <Box sx={{
            marginTop: '30px', display: 'flex', flexDirection: 'column',
          }}
          >
            <Link href="tel:+98-991-659-6573" color="text.primary" overflow="hidden" variant="h5" className="contact__link">
              <BsFillTelephoneFill className="contact__link__icon" />
              <span>
                {t('contact.phone')}
                :
                {' '}
              </span>
              <div className="phone__number" dir="ltr">
                +98 991 659 6573
              </div>
              <RiExternalLinkFill className="contact__link--action" />
            </Link>
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
        <img src="./assets/img/Contact2.png" alt="contact" className="contact__img" />
      </Box>
    </Box>
  );
};

export default Contact;

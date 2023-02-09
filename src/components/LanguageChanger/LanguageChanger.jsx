import {
  Box,
  IconButton, List, ListItemButton, ListItemText, useTheme,
} from '@mui/material';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { RiGlobalLine } from 'react-icons/ri';

const LanguageChanger = () => {
  const { palette } = useTheme();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [showlist, setShowlist] = useState(false);
  const { i18n } = useTranslation();

  const handleActiveList = () => {
    // setShowlist(!showlist);
  };

  return (
    <Box className={`LanguageChanger  ${showlist ? 'showlist' : ''}`}>
      <IconButton
        aria-label="toggle"
        className="language__button"
        sx={{ color: 'primary.light' }}
        onClick={handleActiveList}
      >
        <RiGlobalLine />
      </IconButton>
      <List
        component="nav"
        aria-label="main"
        sx={{
          position: 'fixed', backgroundColor: 'primary.main', marginTop: '35px', padding: '0',
        }}
        className="language__list"
      >
        <ListItemButton
          selected={i18n.language === 'en-US' || i18n.language === 'en'}
          onClick={() => i18n.changeLanguage('en')}
        >
          <ListItemText primary="English" />
        </ListItemButton>
        <ListItemButton
          selected={i18n.language === 'fa-IR' || i18n.language === 'fa'}
          onClick={() => i18n.changeLanguage('fa')}
        >
          <ListItemText sx={{ direction: 'rtl', textAlign: 'start' }} primary="فارسی" />
        </ListItemButton>
      </List>

      <style jsx>
        {`
        .LanguageChanger {
          display: flex;
          justify-content: end;
        }

        .language__list {
          border-radius: 10px;
          overflow: hidden;
          border-top-right-radius: 0;
          height: 0;
          transition-delay: 0.1s;
          transition: height 0.3s;
        }

        .language__button {
          transition: 0.1s;
        }

        .LanguageChanger:hover .language__button {
          border-radius: 0;
          background-color: ${palette.primary.main} !important;
          color: #FAFAFA !important;
          border-top-left-radius: 10px;
          border-top-right-radius: 10px;
        }

        .LanguageChanger:hover .language__list {
          height: 100px;
        }

        .showlist .language__button {
          border-radius: 0;
          background-color: ${palette.primary.main} !important;
          color: #FAFAFA !important;
          border-top-left-radius: 10px;
          border-top-right-radius: 10px;
        }

        .showlist .language__list {
          height: 100px;
        }

        .Mui-selected {
          background-color: ${palette.primary.dark} !important;
        }
      `}
      </style>
    </Box>
  );
};
export default LanguageChanger;

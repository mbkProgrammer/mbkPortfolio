import React, { useEffect, useState, useTransition } from 'react';
import { styled } from '@mui/material/styles';
import {
  IconButton, Box, Typography, Drawer,
} from '@mui/material';
import { FaBars } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';
import { MdOutlineClose, MdDarkMode, MdLightMode } from 'react-icons/md';
import { useTranslation } from 'react-i18next';
import TabList from './TabList';
import LanguageChanger from '../LanguageChanger/LanguageChanger';

const Header = ({ darkMode, setDarkMode }) => {
  const [value, setValue] = useState(0);
  const [pageName, setPageName] = useState(0);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [windowWidth, setWindowWidth] = useState(700);
  const { t } = useTranslation();

  useEffect(() => {
    setWindowWidth(window.innerWidth);
  }, []);

  const location = useLocation();
  useEffect(() => {
    switch (location.pathname) {
      case '/':
        setValue(0);
        setPageName('home');
        break;
      case '/About':
        setValue(1);
        setPageName('about');
        break;
      case '/Portfolio':
        setValue(2);
        setPageName('portfolio');
        break;
      case '/Contact':
        setValue(3);
        setPageName('contact');
        break;

      default:
        break;
    }
  }, [location]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const Tabs = styled(Box)`
    color: #fff;
    border-bottom: 1px solid #eee;
  `;

  const handleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Box
      bgcolor="background.paper"
      color="primary.main"
      position="fixed"
      zIndex="1000"
      width="100vw"
    >
      <Tabs
        value={value}
        onChange={handleChange}
        centered="true"
        className="NavbarTabs"
        bgcolor="Background.paper"
        paddingX="16px"
        paddingY="12px"
      >
        {windowWidth <= 600 ? (
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <IconButton
              aria-label="toggle"
              sx={{ color: 'primary.light' }}
              onClick={handleDrawerToggle}
            >
              <FaBars />
            </IconButton>
            <Typography variant="h6" color="primary">
              {t(`header.${pageName}`)}
            </Typography>
            <Box display="flex">
              <IconButton
                aria-label="toggle"
                sx={{ color: 'primary.light' }}
                onClick={handleDarkMode}
              >
                {darkMode ? <MdLightMode color="#FDB813" /> : <MdDarkMode />}
              </IconButton>
              <LanguageChanger />
            </Box>
            <Drawer
              anchor="top"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true,
              }}
              sx={{
                display: {
                  xs: 'block',
                  sm: 'none',
                  boxShadow: '1  1  1  #555',
                },
                color: 'primary',
                backgroundColor: 'inherit',
              }}
            >
              <IconButton
                onClick={handleDrawerToggle}
                aria-label="Close"
                sx={{
                  color: 'primary.light',
                  position: 'fixed',
                  fontSize: '1.6rem',
                }}
              >
                <MdOutlineClose />
              </IconButton>
              <TabList handleDrawerToggle={handleDrawerToggle} />
            </Drawer>
          </Box>
        ) : (
          <Box display="flex" width="100vw" justifyContent="center">
            <TabList handleDrawerToggle={handleDrawerToggle} />
            <IconButton
              aria-label="toggle"
              sx={{ color: 'primary.light' }}
              onClick={handleDarkMode}
            >
              {darkMode ? <MdLightMode color="#FDB813" /> : <MdDarkMode />}
            </IconButton>
            <LanguageChanger />
          </Box>
        )}
      </Tabs>
    </Box>
  );
};
export default Header;

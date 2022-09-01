import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import {
  IconButton, Box, Typography, Drawer, Button,
} from '@mui/material';
import { FaBars } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import { MdOutlineClose, MdDarkMode, MdLightMode } from 'react-icons/md';
import TabList from './TabList';

const Header = ({ darkMode, setDarkMode }) => {
  const [value, setValue] = useState(0);
  const [pageName, setPageName] = useState(0);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [windowWidth, setWindowWidth] = useState(700);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
  }, []);

  const location = useLocation();
  useEffect(() => {
    switch (location.pathname) {
      case '/':
        setValue(0);
        setPageName('Home');
        break;
      case '/About':
        setValue(1);
        setPageName('About');
        break;
      case '/Portfolio':
        setValue(2);
        setPageName('Portfolio');
        break;
      case '/Contact':
        setValue(3);
        setPageName('Contact');
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
              {pageName}
            </Typography>
            <IconButton
              aria-label="toggle"
              sx={{ color: 'primary.light' }}
              onClick={handleDarkMode}
            >
              {darkMode ? <MdLightMode /> : <MdDarkMode />}
            </IconButton>
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
              {darkMode ? <MdLightMode /> : <MdDarkMode />}
            </IconButton>
          </Box>
        )}
      </Tabs>
    </Box>
  );
};
export default Header;

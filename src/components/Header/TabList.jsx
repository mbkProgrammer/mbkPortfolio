import React from 'react';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';
import { useTheme } from '@emotion/react';
import { Link, useLocation } from 'react-router-dom';

const TabList = ({ handleDrawerToggle }) => {
  const theme = useTheme();
  const { pathname } = useLocation();
  const TabsLists = styled(Box)`
    background-color: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.6s;
    @media (max-width: 600px) {
      & {
        background-color: ${theme.palette.Background.paper};
        flex-direction: column;
        padding: 10px 0;
        width: 100%;
      }
    }
  `;

  const Tab = styled(Link)`
    color: ${theme.palette.primary.dark};
    text-align: center;
    padding: 9px 5px;
    margin: 0 18px;
    font-weight: 700;
    position: relative;
    display: inline-block;
    text-decoration: none;
    &::before,
    &::after {
      content: '';
      position: absolute;
      left: 0;
      width: 100%;
      height: 2px;
      background: ${theme.palette.secondary.main};
      transform: scaleX(0);
      transition: transform .3s;
    }
    &::before {
      top: 1px;
      transform-origin: left;
    }
    &::after {
      bottom: 1px;
      transform-origin: right;
    }
    &:hover::before,
    &:hover::after {
      transform: scaleX(1);
    }
    &.selected {
      color: ${theme.palette.secondary.light};
    }
    @media (max-width: 600px) {
      & {
        width: 90%;
      }
      &::before {
        display: none;
      }
    }
  `;
  return (
    <TabsLists className="Navbar--tabList">
      <Tab
        className={pathname === '/' ? 'selected' : ''}
        to="/"
        onClick={handleDrawerToggle}
      >
        Home
      </Tab>
      <Tab
        className={pathname === '/About' ? 'selected' : ''}
        to="/About"
        onClick={handleDrawerToggle}
      >
        About
      </Tab>
      <Tab
        className={pathname === '/Portfolio' ? 'selected' : ''}
        to="/Portfolio"
        onClick={handleDrawerToggle}
      >
        Portfolio
      </Tab>
      <Tab
        className={pathname === '/Contact' ? 'selected' : ''}
        to="/Contact"
        onClick={handleDrawerToggle}
      >
        Contact
      </Tab>
    </TabsLists>
  );
};

export default TabList;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { useTheme } from '../contexts/ThemeProviderWrapper';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';

import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import HomeIcon from '@mui/icons-material/Home';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import GitHubIcon from '@mui/icons-material/GitHub';

import PageConfig from './PageConfig';

export default function NavBar(): JSX.Element {
  const [value, setValue] = useState<number>(0);

  return (
    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={4}>
      <BottomNavigation
        showLabels
        sx={{ justifyContent: 'space-around' }}
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          <BottomNavigationAction label="Home" icon={<HomeIcon />} />
        </Link>
        <Link to="/studies" style={{ textDecoration: 'none', color: 'inherit' }}>
          <BottomNavigationAction label="Studies" icon={<LibraryBooksIcon />} />
        </Link>
        <Link to="/experience" style={{ textDecoration: 'none', color: 'inherit' }}>
          <BottomNavigationAction label="Experience" icon={<HomeRepairServiceIcon />} />
        </Link>
        <Link to="/projects" style={{ textDecoration: 'none', color: 'inherit' }}>
          <BottomNavigationAction label="Personal Projects" icon={<GitHubIcon />} />
        </Link>

        <PageConfig />
      </BottomNavigation>
    </Paper>
  );
}

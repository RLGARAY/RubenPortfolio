import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';

import Box from '@mui/material/Box';

import { ThemeProviderWrapper } from './contexts/ThemeProviderWrapper';
import { TextProvider } from './contexts/DataProvider';

import NavBar from './components/NavBar';
import Experience from './pages/Experience';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Studies from './pages/Studies';

function App() {
  return (
    <ThemeProviderWrapper>
      <TextProvider>
        <CssBaseline />
        <Box sx={{ height: '94vh', display: 'flex', flexDirection: 'column' }}>
          <NavBar />
          <Box
            sx={{
              flexGrow: 1,
              overflow: 'auto',
            }}
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/studies" element={<Studies />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/projects" element={<Projects />} />
              {/* Ruta comodín: redirigir a Home si la ruta no coincide */}
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </Box>
        </Box>
      </TextProvider>
    </ThemeProviderWrapper>
  );
}

export default App;

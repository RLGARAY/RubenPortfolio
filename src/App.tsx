import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Box from '@mui/material/Box';

import { ThemeProviderWrapper } from './contexts/ThemeProviderWrapper';

import NavBar from './components/NavBar';
import Experience from './pages/Experience';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Studies from './pages/Studies';

function App() {
  return (
    <ThemeProviderWrapper>
      <Box sx={{ height: '100vh', bgcolor: 'background.paper' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/studies" element={<Studies />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          {/* Ruta comodín: redirigir a Home si la ruta no coincide */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <NavBar />
      </Box>
    </ThemeProviderWrapper>
  );
}

export default App;

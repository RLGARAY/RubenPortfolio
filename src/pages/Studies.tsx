import React from 'react';

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Chip from '@mui/material/Chip';

import { useTextContext } from '../contexts/DataProvider';

interface TextItem {
  subtitle: string;
  texts: string[];
  tags: string[];
}

interface SectionData {
  title: string;
  content: TextItem[];
}

const Studies: React.FC = () => {
  // Obtener el valor del contexto
  const textData = useTextContext();

  // Manejar la carga de datos si aún no están disponibles
  if (!textData || !textData.studies) {
    return <p>Cargando...</p>;
  }

  // Obtener datos específicos de la sección de experiencia
  const studiesData: SectionData = textData.studies;
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      <Typography variant="h1" gutterBottom>
        {studiesData.title}
      </Typography>
      <Grid container spacing={4} sx={{ flexDirection: 'column', padding: 2 }}>
        {studiesData.content.map((item, index) => (
          <Grid
            key={index}
            item
            xs={12}
            sm={11}
            md={9}
            lg={8}
            sx={{
              marginRight: index % 2 === 0 ? 'auto' : '30px',
              marginLeft: index % 2 !== 0 ? 'auto' : '30px',
            }}
          >
            <Paper elevation={3} sx={{ padding: 2 }}>
              <Typography variant="h4" gutterBottom>
                {item.subtitle}
              </Typography>
              {item.texts.map((text, textIndex) => (
                <Typography key={textIndex} variant="body1" gutterBottom>
                  {text}
                </Typography>
              ))}
              {item.tags.map((tag, tagIndex) => (
                <Chip
                  color="primary"
                  variant="outlined"
                  key={tagIndex}
                  label={tag}
                  sx={{ marginRight: 5 }}
                />
              ))}
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Studies;

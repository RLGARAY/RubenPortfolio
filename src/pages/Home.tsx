import React from 'react';

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import { useTextContext } from '../contexts/DataProvider';

interface TextItem {
  subtitle: string;
  texts: string[];
  image: string;
}

interface SectionData {
  title: string;
  content: TextItem[];
}

const Home: React.FC = () => {
  // Obtener el valor del contexto
  const textData = useTextContext();

  // Manejar la carga de datos si aún no están disponibles
  if (!textData || !textData.home) {
    return <p>Cargando...</p>;
  }

  // Obtener datos específicos de la sección de experiencia
  const homeData: SectionData = textData.home;
  const imageSrc = homeData.content[0].image;

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        padding: '20px',
      }}
    >
      <Typography variant="h1" gutterBottom>
        {homeData.title}
      </Typography>

      {imageSrc && (
        <Box
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: '15px',
          }}
        >
          <img
            src={'Images/' + imageSrc}
            alt="Imagen de bienvenida"
            style={{ maxWidth: '100%', maxHeight: '300px', borderRadius: '8px' }}
          />

          <div style={{ maxWidth: '700px', width: '100%', textAlign: 'left' }}>
            {homeData.content.map((item, index) => (
              <div key={index}>
                {item.texts.map((text, i) => (
                  <Typography key={i} variant="h5" paragraph>
                    {text}
                  </Typography>
                ))}
              </div>
            ))}
          </div>
        </Box>
      )}
    </Box>
  );
};

export default Home;

import React from 'react';

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';

import ImageCard from '../components/ImageCard';
import { useTextContext } from '../contexts/DataProvider';

interface TextItem {
  subtitle: string;
  texts: string[];
  tags: string[];
  image: string;
  links: {
    github: string;
    demo: string;
  };
}

interface SectionData {
  title: string;
  content: TextItem[];
}

const Projects: React.FC = () => {
  const textData = useTextContext();

  if (!textData || !textData.projects) {
    return <p>Cargando...</p>;
  }

  const projectsData: SectionData = textData.projects;

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
        {projectsData.title}
      </Typography>
      <Grid container spacing={4} sx={{ flexDirection: 'column', padding: 2 }}>
        {projectsData.content.map((item, index) => (
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
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: index % 2 !== 0 ? 'row-reverse' : 'row',
                  gap: '10px',
                }}
              >
                <Stack
                  sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly' }}
                >
                  {item.texts.map((text, textIndex) => (
                    <Typography key={textIndex} variant="body1" paragraph>
                      {text}
                    </Typography>
                  ))}
                  <div>
                    {item.tags.map((tag, tagIndex) => (
                      <Chip
                        color="primary"
                        key={tagIndex}
                        label={tag}
                        sx={{ marginRight: 3, marginBottom: 1.5 }}
                      />
                    ))}
                  </div>
                </Stack>
                <Divider orientation="vertical" flexItem />
                <ImageCard image={item.image} links={item.links} />
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Projects;

import * as React from 'react';
import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import CodeIcon from '@mui/icons-material/Code';

interface ImageCardProps {
  image: string;
  links: {
    github: string;
    demo: string;
  };
}

const ImageCard: React.FC<ImageCardProps> = ({ image, links }) => {
  const openUrlInNewTab = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      {image && <CardMedia component="img" image={'Images/' + image} />}
      <Box sx={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'center' }}>
        {links.demo && (
          <IconButton color="primary" onClick={() => openUrlInNewTab(links.demo)}>
            <OpenInNewIcon />
          </IconButton>
        )}
        <IconButton color="primary" onClick={() => openUrlInNewTab(links.github)}>
          <CodeIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default ImageCard;

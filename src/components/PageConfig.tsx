import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useTheme } from '../contexts/ThemeProviderWrapper';
import TranslateIcon from '@mui/icons-material/Translate';

import { ToggleDarkMode } from '../custom/ToggleDarkMode';
import { ToggleLanguage } from '../custom/ToggleLanguage';

export default function PageConfig() {
  const { toggleDarkMode, toggleLanguage } = useTheme();

  return (
    <FormGroup>
      <Stack direction="row" alignItems="center">
        <Typography>ES</Typography>
        <ToggleLanguage
          onClick={toggleLanguage}
          sx={{ m: 1 }}
          icon={<TranslateIcon fontSize="small" />}
          checkedIcon={<TranslateIcon fontSize="small" />}
        />
        <Typography>EN</Typography>
      </Stack>
      <ToggleDarkMode onClick={toggleDarkMode} sx={{ m: 1 }} defaultChecked />
    </FormGroup>
  );
}

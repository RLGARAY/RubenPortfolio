import { styled } from '@mui/material/styles';
import Switch from '@mui/material/Switch';

export const ToggleLanguage = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,
  '& .MuiSwitch-switchBase': {
    margin: 6.5,
    padding: 0,
    transform: 'translateX(6px)',
    '&.Mui-checked': {
      color: '#fff',
      transform: 'translateX(28px)',

      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: '#5c5c8a',
      },
    },
  },

  '& .MuiSwitch-track': {
    opacity: 1,
    backgroundColor: '#5c5c8a',
    borderRadius: 20 / 2,
  },
}));

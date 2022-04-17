import { React } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import SUNNY from '../../Statics/Images/sun.svg';

const WeakWEather = () => {
  let index = 0;
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {Array.from(Array(6)).map(() => {
          index += 1;
          return (
            <Grid item xs={2} sm={4} md={4} key={index}>
              <Typography variant="h2"> MON </Typography>
              <img src={SUNNY} alt="weather-icon" />
              <Typography variant="h6" style={{ color: '#fff', textAlign: 'center' }}>
                15°c
              </Typography>
            </Grid>
          );
        })}
        ;
      </Grid>
    </Box>
  );
};

export default WeakWEather;

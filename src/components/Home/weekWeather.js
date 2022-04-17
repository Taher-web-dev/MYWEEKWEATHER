import { React } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import './weekWeather.css';
import PropTypes from 'prop-types';
import SUNNY from '../../Statics/Images/sun.svg';

const WeakWEather = (props) => {
  const { forecasting } = props;
  let index = 0;
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 6, sm: 12, md: 12 }} className="container">
        {Array.from(Array(6)).map(() => {
          index += 1;
          return (
            <Grid item xs={2} sm={4} md={4} key={index} className="weekday-weather">
              <Typography variant="h5" className="day-name"> MON </Typography>
              <img src={SUNNY} alt="weather-icon" className="weather-img" />
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
WeakWEather.propTypes = {
  forecasting: PropTypes.instanceOf(Object).isRequired,
};
export default WeakWEather;

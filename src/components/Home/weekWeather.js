import { React, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import './weekWeather.css';
import PropTypes from 'prop-types';
import { forecastData } from './weatherHandler';

const WeakWEather = (props) => {
  const weather = useSelector((state) => state.weather);
  const { forecasting } = props;
  const forecastArray = forecastData(forecasting);
  let index = 0;
  const cloudAnimation = () => {
    const clouds = document.querySelectorAll('.CLOUDY');
    const rains = document.querySelectorAll('.RAINY');
    const translate = (el, dx) => {
      const elem = el;
      elem.style.transform += `translate(${dx}px)`;
    };
    Array.from(clouds).forEach((elem) => {
      setTimeout(translate, 1000, elem, 3);
      setTimeout(translate, 2000, elem, 3);
      setTimeout(translate, 3000, elem, -3);
      setTimeout(translate, 4000, elem, -3);
    });
    Array.from(rains).forEach((elem) => {
      setTimeout(translate, 1000, elem, 3);
      setTimeout(translate, 2000, elem, 3);
      setTimeout(translate, 3000, elem, -3);
      setTimeout(translate, 4000, elem, -3);
    });
  };
  const sunAnimation = () => {
    const sunnies = document.querySelectorAll('.SUNNY');
    const rotate = (el) => {
      const elem = el;
      elem.style.transform += 'rotate(1deg)';
    };
    Array.from(sunnies).forEach((elem) => {
      rotate(elem);
    });
  };
  useEffect(() => {
    const clouds = document.querySelectorAll('.CLOUDY');
    const rains = document.querySelectorAll('.RAINY');
    const sunnies = document.querySelectorAll('.SUNNY');
    Array.from(clouds).forEach((el) => {
      const elem = el;
      elem.style.transform = 'rotate(0deg)';
    });
    Array.from(rains).forEach((el) => {
      const elem = el;
      elem.style.transform = 'rotate(0deg)';
    });
    Array.from(sunnies).forEach((el) => {
      const elem = el;
      elem.style.transform = 'translate(0px)';
    });
    const cloudIntervale = setInterval(cloudAnimation, 4000);
    const sunIntervale = setInterval(sunAnimation, 1);
    return () => {
      clearInterval(sunIntervale);
      clearInterval(cloudIntervale);
    };
  }, [weather]);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 6, sm: 12, md: 12 }} className="container">
        {forecastArray.map((dayWeather) => {
          index += 1;
          return (
            <Grid item xs={2} sm={4} md={4} key={index} className="weekday-weather" style={{ flexDirection: 'column' }}>
              <Typography variant="h5" className="day-name">{dayWeather.day}</Typography>
              <img src={dayWeather.img} alt="weather-icon" className={`${dayWeather.dayWeatherDescription} weather-img`} />
              <Typography variant="h6" style={{ color: '#fff', textAlign: 'center' }}>
                {`${dayWeather.temp}°c`}
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

/* eslint-disable react/jsx-props-no-spreading */
import { React, useState, useEffect } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import './header.css';
import countries from './helper';
import LOCATION from '../../Statics/Images/location.png';

const Header = (props) => {
  const {
    getCity, getCurrentLocation, initialCity,
  } = props;
  let city = initialCity;
  const [value, setValue] = useState(new Date());
  const popUpOoptions = () => {
    const header = document.querySelector('.header');
    const options = document.querySelector('.options');
    header.style.display = 'none';
    options.style.display = 'flex';
  };
  
  const countryHandlerChange = (e) => {
    setTimeout(changeHeaderBar, 1000);
    city = e.target.textContent;
  };

  const changeHeaderBar = () => {
    const header = document.querySelector('.header');
    const options = document.querySelector('.options');
    options.style.display = 'none';
    header.style.display = 'flex';
  };
  const dateHandlerChange = (newValue) => {
    setValue(newValue);
    setTimeout(changeHeaderBar, 1000);
  };

  const theme = createTheme({
    palette: {
      primary: {
        main: '#fff',
      },
      secondary: {
        main: '#fff',
      },
      text: {
        primary: '#fff',
        secondary: '#fff',
      },
      action: {
        active: '#fff',
      },
      background: {
        paper: 'none',
      },
    },
  });
  
  return (
    <div>
      <Grid
        container
        spacing={0.5}
        className="options"
        style={{
          display: 'none', justifyContent: 'space-around', alignItems: 'center', paddingTop: '5%',
        }}
      >
        <ThemeProvider theme={theme}>
          <Grid item xs={5.5}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DesktopDatePicker
                label="Date"
                inputFormat="MM/dd/yyyy"
                value={value}
                onChange={dateHandlerChange}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
          </Grid>
          <Grid item xs={6}>
            <Autocomplete
              id="country-select-demo"
              sx={{ width: 167 }}
              options={countries}
              autoHighlight
              onChange={(e) => countryHandlerChange(e)}
              getOptionLabel={(option) => option.label}
              renderOption={(props, option) => (
                <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props} style={{ color: '#bae' }}>
                  <img
                    loading="lazy"
                    width="20"
                    src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                    srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                    alt=""
                  />
                  {option.label}
                </Box>
              )}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Choose a country"
                  inputProps={{
                    ...params.inputProps,
                    autoComplete: 'new-password', // disable autocomplete and autofill
                  }}
                />
              )}
            />
          </Grid>
        </ThemeProvider>
      </Grid>

      <div
        className="header"
        style={{
          display: 'flex', justifyContent: 'space-around', alignItems: 'center', paddingTop: '5%',
        }}
      >
        <MenuIcon style={{ color: '#fff' }} onClick={popUpOoptions} />
        <Typography variant="h5" component="div" style={{ color: '#fff' }}>
          {city}
        </Typography>
        <div role="button" onClick={getCurrentLocation} onKeyDown={getCurrentLocation} tabIndex={0}>
          <img src={LOCATION} alt="location_icon" height="25rem" />
        </div>
      </div>
    </div>
  );
};
export default Header;

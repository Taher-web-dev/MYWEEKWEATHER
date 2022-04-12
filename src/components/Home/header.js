/* eslint-disable react/jsx-props-no-spreading */
import { React } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import './header.css';
import { useSelector, useDispatch } from 'react-redux';
import { setCountry } from '../../Redux/Position/Action/action';
import countries from './helper';
import LOCATION from '../../Statics/Images/location.png';
// import { lastDayOfDecade } from 'date-fns';

const Header = (props) => {
  const {
    getCurrentLocation,
  } = props;
  const city = useSelector((state) => state.city);
  const dispatch = useDispatch();
  const popUpOoptions = () => {
    const header = document.querySelector('.header');
    const options = document.querySelector('.options');
    header.style.display = 'none';
    options.style.display = 'flex';
  };

  const changeHeaderBar = () => {
    const header = document.querySelector('.header');
    const options = document.querySelector('.options');
    options.style.display = 'none';
    header.style.display = 'flex';
  };
  const countryHandlerChange = (e) => {
    setTimeout(changeHeaderBar, 1000);
    const country = e.target.textContent;
    dispatch(setCountry({
      country,
      city: '',
    }));
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
          <Grid item xs={2}>
            <ArrowBackIosIcon style={{ color: '#fff' }} onClick={changeHeaderBar} />
          </Grid>
          <Grid item xs={8}>
            <Autocomplete
              id="country-select-demo"
              sx={{ width: 190 }}
              options={countries}
              autoHighlight
              onChange={countryHandlerChange}
              getOptionLabel={(option) => option.label}
              renderOption={(props, option) => (
                <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props} style={{ color: '#fff' }}>
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
          {city.country}
          ,
          {city.city}
        </Typography>
        <div role="button" onClick={getCurrentLocation} onKeyDown={getCurrentLocation} tabIndex={0}>
          <img src={LOCATION} alt="location_icon" height="25rem" />
        </div>
      </div>
    </div>
  );
};
Header.propTypes = {
  getCurrentLocation: PropTypes.func.isRequired,
};
export default Header;

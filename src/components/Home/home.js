import { React, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import XMLHttpRequest from 'xhr2';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { setCountry } from '../../Redux/Position/Action/action';
import Header from './header';
import SUNNY from '../../Statics/Images/sun.svg';

const Home = () => {
  const [lat, setLat] = useState(0);
  const [long, setLong] = useState(0);
  const dispatch = useDispatch();

  const getCity = (coordinates) => {
    const xhr = new XMLHttpRequest();
    const lat = coordinates[0];
    const lng = coordinates[1];
    function processRequest() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        const response = JSON.parse(xhr.responseText);
        const loc = response.address;
        dispatch(setCountry(loc));
      }
    }
    xhr.open('GET', `https://us1.locationiq.com/v1/reverse.php?key=pk.f19e4fdca419f2e8ffa20180b18d27d6&lat=${
      lat}&lon=${lng}&format=json`, true);
    xhr.send();
    xhr.onreadystatechange = processRequest;
    xhr.addEventListener('readystatechange', processRequest, false);
  };

  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
    });
    if ((lat !== 0) && (long !== 0)) {
      const coords = [lat.toString(), long.toString()];
      getCity(coords);
    }
  };

  const weatherAnimation = () => {
    const element = document.querySelector('.weather');
    element.style.transform += 'rotate(2deg)';
  };
  useEffect(() => getCurrentLocation(), [lat, long]);
  useEffect(() => setInterval(weatherAnimation, 1), []);
  return (
    <div>
      <Header getCurrentLocation={getCurrentLocation} />
      <Grid
        container
        style={{
          marginTop: '50px', backgroundColor: 'rgb(42, 84, 108)', padding: '25px 0', width: '90%', marginLeft: '5%', border: '4px solid rgb(96, 128, 148)', borderRadius: '5%',
        }}
      >
        <Grid
          item
          xs={6}
          style={{
            display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-end',
          }}
        >
          <img src={SUNNY} alt="weather" style={{ marginBottom: '20px', width: '60px' }} className="weather" />
          <Typography variant="h5" style={{ color: '#fff' }}>Sunny</Typography>
        </Grid>
        <Grid item xs={5} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
          <Typography variant="span" style={{ color: '#fff' }}>Wind: 10 metre/sec</Typography>
          <Typography variant="span" style={{ color: '#fff' }}>Humidity: 10 %</Typography>
          <Typography variant="span" style={{ color: '#fff' }}>Pressure: 5 hPa</Typography>
          <Typography variant="h3" style={{ color: '#fff', textAlign: 'center' }}>15°c</Typography>
        </Grid>
      </Grid>
    </div>
  );
};
export default Home;

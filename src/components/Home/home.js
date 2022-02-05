import { React, useState, useEffect } from 'react';
import Header from './header';

const Home = () => {
  const [lat, setLat] = useState(0);
  const [long, setLong] = useState(0)
  const [city, setCity] = useState('kasserine');
  
  const getCity = (coordinates) => {
    const XMLHttpRequest = require('xhr2');
    const xhr = new XMLHttpRequest();
    const lat = coordinates[0];
    const lng = coordinates[1];

    xhr.open('GET', `https://us1.locationiq.com/v1/reverse.php?key=pk.f19e4fdca419f2e8ffa20180b18d27d6&lat=${
      lat}&lon=${lng}&format=json`, true);
    xhr.send();
    function processRequest() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        const response = JSON.parse(xhr.responseText);
        const loc = response.address.city;
        setCity(loc);

      }
    }
    xhr.onreadystatechange = processRequest();
    xhr.addEventListener('readystatechange', processRequest, false);
  };

  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
    });
    const coords = [lat.toString(), long.toString()];
    getCity(coords);
    console.log(city);
  };
  const props = {
    getCity, getCurrentLocation, city,
  };
  useEffect(() => getCurrentLocation(), []);
  return (
    <div>
      <Header props={props} />
    </div>
  );
};
export default Home;

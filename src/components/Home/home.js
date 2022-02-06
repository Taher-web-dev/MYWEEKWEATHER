import { React, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import XMLHttpRequest from 'xhr2';
import { setCountry } from '../../Redux/Position/Action/action';
import Header from './header';

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
  const props = {
    getCurrentLocation,
  };
  useEffect(() => getCurrentLocation(), [lat, long]);
  return (
    <div>
      <Header props={props} />
    </div>
  );
};
export default Home;

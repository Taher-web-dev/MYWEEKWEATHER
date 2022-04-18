import XMLHttpRequest from 'xhr2';
import { setCountry } from '../../Redux/Position/Action/action';

export const getCity = (coordinates, dispatch) => {
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

export const getCurrentLocation = (setCoord, dispatch) => {
  navigator.geolocation.getCurrentPosition((position) => {
    const coords = [position.coords.latitude.toString(), position.coords.longitude.toString()];
    getCity(coords, dispatch);
    setCoord([position.coords.latitude, position.coords.longitude]);
  });
};

export const searchLatAndLngByStreet = async (location, setCoord) => {
  const url = `https://api.opencagedata.com/geocode/v1/json?q=${location}&key=59fbb7ff74d34f8486c9a37271339b21`;
  const result = await fetch(url);
  const res = await result.json();
  const pertinentResult = res.results[0];
  const { lat, lng } = pertinentResult.geometry;
  setCoord([lat, lng]);
};

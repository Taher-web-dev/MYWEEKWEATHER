import { loadingStart, loadingFailed, getData } from '../Action/action';

const fetchData = (lat, long) => {
  const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=hourly,minutely&appid=f3a78868cf50de0ac451e2c1a9703ab2&units=metric`;
  fetch(url);
};
const getWeatherData = (lat, long) => (dispatch) => {
  dispatch(loadingStart);
  fetchData(lat, long)
    .then((resp) => resp.json())
    .then((data) => dispatch(getData(data)))
    .catch((err) => dispatch(loadingFailed(err.message)));
};

export default getWeatherData;

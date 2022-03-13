import { loadingStart, loadingFailed, getData } from '../Action/action';

const fetchData = (lat, long) => {
  const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=hourly,minutely&appid=86741436262fab50bf108d4fe515566c&units=metric`;
  return fetch(url);
};
const getWeatherData = (lat, long) => (dispatch) => {
  dispatch(loadingStart);
  try {
    fetchData(lat, long)
      .then((resp) => resp.json())
      .then((data) => dispatch(getData(data)))
      .catch((err) => dispatch(loadingFailed(err.message)));
  } catch {
    dispatch(loadingFailed('Seeking the position ...'));
  }
};

export default getWeatherData;

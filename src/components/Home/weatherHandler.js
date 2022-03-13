import SUNNY from '../../Statics/Images/sun.svg';
import CLOUDY from '../../Statics/Images/cloudy.png';
import RAINY from '../../Statics/Images/rainy-day.png';

export const weatherDescription = {
  clear: ['SUNNY', SUNNY],
  clouds: ['CLOUDY', CLOUDY],
  rain: ['RAINY', RAINY],
  searching: [null, null],
};

export const currentData = (weatherObj) => {
  let [description, wind, humidity, pressure, temp] = ['Searching', '', '', '', ''];
  try {
    const targetData = weatherObj.current;
    description = targetData.weather[0].main;
    wind = targetData.wind_speed;
    humidity = targetData.humidity;
    pressure = targetData.pressure;
    temp = targetData.temp;
  } catch {
    [description, wind, humidity, pressure, temp] = ['Searching', '', '', '', ''];
  }
  return [description, wind, humidity, pressure, temp];
};

// export default currentData;

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
export const currentDay = (dt) => {
  const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  const date = new Date(dt * 1000);
  const orderDay = date.getDay();
  return days[orderDay];
};
export const forecastData = (weatherObj) => {
  const forecastWeather = [];
  try {
    const dailies = weatherObj.daily;
    [1, 2, 3, 4, 5, 6].forEach((index) => {
      const dayWeather = dailies[index];
      const dayDt = dayWeather.dt;
      const description = dayWeather.weather[0].main;
      const temp = dayWeather.temp.day;
      const dayWeatherDescription = weatherDescription[description.toLowerCase()][0];
      const img = weatherDescription[description.toLowerCase()][1];
      const day = currentDay(dayDt);
      const dayWeatherObj = {
        temp, img, day, dayWeatherDescription,
      };
      forecastWeather.push(dayWeatherObj);
    });
  } catch {
    const forecastWeather = [];
    forecastWeather.push(1);
    forecastWeather.shift();
  }
  return forecastWeather;
};

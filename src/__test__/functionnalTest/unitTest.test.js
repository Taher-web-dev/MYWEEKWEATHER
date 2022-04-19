import { currentData } from "../../components/Home/weatherHandler";

describe('test currentData function', () => {
  test('get correct data given expected attributs inside the object input', () => {
    const weatherObj = {
      current: {
        weather: [{main: 'cloudy'}],
        wind_speed: 15,
        humidity: 10,
        pressure: 12,
        temp: 25,
      },
    };
    expect(currentData(weatherObj)).toStrictEqual(['cloudy', 15, 10, 12, 25]);
  });
  test('get correct data given empty input object', () => {
    const weatherObj = {};
    expect(currentData(weatherObj)).toStrictEqual(['Searching', '', '', '', '']);
  });
});
import { fetchData } from "../../Redux/Weather/Thunk/thunk";

describe('fetch weather data ', () => {
  test('get the correct data', async () => {
    const resp = await fetchData(15, 22);
    const result = resp.json();
    expect(result).toBeInstanceOf(Object);
  });
});
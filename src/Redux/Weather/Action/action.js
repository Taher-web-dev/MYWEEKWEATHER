export const START = 'WEATHER/WEATHER/START';
export const FAILURE = 'WEATHER/WEATHER/FAILURE';
export const CONSUMEDATA = 'WEATHER/WEATHER/CONSUMEDATA';

export const loadingStart = () => ({
  type: START,
});

export const loadingFailed = (payload) => ({
  type: FAILURE,
  payload,
});

export const getData = (payload) => ({
  type: CONSUMEDATA,
  payload,
});

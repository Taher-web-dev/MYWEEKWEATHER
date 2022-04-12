import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import cityReducer from './Position/Reducer/reducer';
import weatherReducer from './Weather/Reducer/reducer';
import toggleReducer from './Toggle/toggle';

const reducer = combineReducers({
  city: cityReducer,
  weather: weatherReducer,
  toggle: toggleReducer,
});
const store = createStore(
  reducer,
  applyMiddleware(thunk, logger),
);
export default store;

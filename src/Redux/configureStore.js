import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import cityReducer from './Position/Reducer/reducer';
import weatherReducer from './Weather/Reducer/reducer';

const reducer = combineReducers({
  city: cityReducer,
  weather: weatherReducer,
});
const store = createStore(
  reducer,
  applyMiddleware(thunk, logger),
);
export default store;

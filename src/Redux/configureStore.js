import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import cityReducer from './Position/Reducer/reducer';

const reducer = combineReducers({
  city: cityReducer,
});
const store = createStore(
  reducer,
  applyMiddleware(logger),
);
export default store;
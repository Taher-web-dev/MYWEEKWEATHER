import { CITY } from '../Action/action';

const cityReducer = (state = {}, action) => {
  switch (action.type) {
    case CITY:
      return {
        ...state,
        country: action.payload.country,
        city: action.payload.state,
      };
    default:
      return state;
  }
};
export default cityReducer;
